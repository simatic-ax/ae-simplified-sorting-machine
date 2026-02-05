USING AxUnit.Assert;
USING ControlModules;

NAMESPACE Test
    {TestFixture}
    CLASS ElevatorTests
        VAR
            elevator : ElevatorSim;
        END_VAR
        VAR CONSTANT
            STATUS_NO_CALL : WORD := WORD#16#7000;
    
        END_VAR
        

        {Test}
        METHOD PUBLIC Test_SetConfig_ValidParameters
            VAR
                expectedIncrement : INT := INT#5;
                expectedUpper : INT := INT#200;
                expectedLower : INT := INT#10;
            END_VAR
            // Ensure there are no other pending errors
            elevator.AckError();
            elevator.Execute();

            elevator.SetConfigLimits(cycleIncrement := expectedIncrement, upperLimit := expectedUpper, lowerLimit := expectedLower);
            
            // Note: Since these are private variables, we test behavior through public methods
            // The configuration should be applied successfully without errors
            elevator.Enable();
            elevator.Execute();
            Equal(actual := elevator.GetStatus(), expected := STATUS_NO_CALL);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_SetConfig_NegativeCycleIncrement_ShouldUseAbsoluteValue
            VAR
                negativeIncrement : INT := INT#-15;
            END_VAR
            // Ensure there are no other pending errors
            elevator.AckError();
            elevator.Execute();
            // configure limit
            elevator.SetConfigLimits(cycleIncrement := negativeIncrement, upperLimit := INT#100, lowerLimit := INT#0);
            elevator.Enable();
            elevator.Execute();
            
            // Elevator should work normally even with negative increment input
            // since it takes absolute value
            Equal(actual := elevator.GetStatus(), expected := STATUS_NO_CALL);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_Enable_SetsEnableFlag
            elevator.Enable();
            
            // Since _enable is protected, we verify through behavior
            // An enabled elevator should accept movement commands
            Equal(actual := elevator.GetIsEnabled(), expected := TRUE);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_MoveTo_ValidTarget_ReturnsTrue
            VAR
                targetPos : INT := INT#50;
            END_VAR

            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#100, lowerLimit := INT#0);
            elevator.Enable();
            elevator.Execute();

            Equal(actual := elevator.PosAbsolute(targetPos := targetPos), expected := TRUE);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_MoveTo_TargetAboveUpperLimit_ReturnsFalse
            VAR
                targetPos : INT := INT#150; // Above upper limit of 100
            END_VAR

            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#100, lowerLimit := INT#0);
            elevator.Enable();
            
            Equal(actual := elevator.PosAbsolute(targetPos := targetPos), expected := FALSE);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_MoveTo_TargetBelowLowerLimit_ReturnsFalse
            VAR
                targetPos : INT := INT#-10; // Below lower limit of 0
            END_VAR

            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#100, lowerLimit := INT#0);
            elevator.Enable();
            
            Equal(actual := elevator.PosAbsolute(targetPos := targetPos), expected := FALSE);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_MoveTo_OutOfLimits_SetsErrorStatus
            VAR
                targetPos : INT := INT#150;
                expectedErrorCode : WORD := typeTransportDeviceBaseStatus#ERR_TARGET_OUT_OF_LIMITS;
            END_VAR

            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#100, lowerLimit := INT#0);
            elevator.Enable();
            
            Equal(actual := elevator.PosAbsolute(targetPos := targetPos), expected := FALSE);

            
            Equal(actual := elevator.GetStatus(), expected := expectedErrorCode);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_MoveUp_EnablesUpwardMovement
            // Ensure there are no other pending errors
            elevator.AckError();
            elevator.Execute();
            
            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#100, lowerLimit := INT#0);
            elevator.Enable();
            
            elevator.MoveUp();
            
            // After calling MoveUp, the elevator should be ready to move
            // We can verify this by checking that no error occurred
            Equal(actual := elevator.GetStatus(), expected := STATUS_NO_CALL);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_MoveDown_EnablesDownwardMovement
            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#100, lowerLimit := INT#0);
            elevator.Enable();
            
            elevator.MoveDown();
            
            // After calling MoveDown, the elevator should be ready to move
            // We can verify this by checking that no error occurred
            Equal(actual := elevator.GetStatus(), expected := STATUS_NO_CALL);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_Execute_WithoutEnable_NoMovement
            VAR
                initialStatus : WORD;
            END_VAR

            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#100, lowerLimit := INT#0);
            initialStatus := elevator.GetStatus();
            
            // Execute without enabling
            elevator.Execute();
            
            // Status should remain unchanged
            Equal(actual := elevator.GetStatus(), expected := initialStatus);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_AckError_ClearsErrorCondition
            VAR
                targetPos : INT := INT#150; // Invalid target to trigger error
            END_VAR

            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#100, lowerLimit := INT#0);
            elevator.Enable();
            
            // Trigger error
            elevator.PosAbsolute(targetPos := targetPos);
            
            // Acknowledge error
            elevator.AckError();
            elevator.Execute(); // Execute to process the acknowledgment
            
            // Error should be cleared
            Equal(actual := elevator.GetStatus(), expected := STATUS_NO_CALL);
        END_METHOD

        {Test}
        METHOD PUBLIC TEST_Execute_MovementToTarget_StopsAtTarget
            VAR_TEMP
                index : INT;
            END_VAR
            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#100, lowerLimit := INT#0);
            elevator.Enable();
            elevator.PosAbsolute(targetPos := INT#20);
            
            // Execute multiple cycles to simulate movement
            // Note: In real scenario, this would be called cyclically

            FOR index := INT#1 TO INT#5 DO
                elevator.Execute();
            END_FOR;
            
            // Movement should complete without error
            Equal(actual := elevator.GetStatus(), expected := STATUS_NO_CALL);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_Execute_MovementToUpperLimit_StopsAtLimit
            VAR_TEMP
                index : INT;
            END_VAR
            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#50, lowerLimit := INT#0);
            elevator.Enable();
            elevator.MoveUp();
            
            // Execute multiple cycles to reach upper limit
            FOR index := INT#1 TO INT#5 DO
                elevator.Execute();
            END_FOR;
            
            // Should stop at upper limit without error
            Equal(actual := elevator.GetStatus(), expected := STATUS_NO_CALL);
        END_METHOD

        {Test}
        METHOD PUBLIC Test_Execute_MovementToLowerLimit_StopsAtLimit
            VAR_TEMP
                index : INT;
            END_VAR
            elevator.SetConfigLimits(cycleIncrement := INT#10, upperLimit := INT#100, lowerLimit := INT#20);
            elevator.Enable();
            elevator.MoveDown();
            
            // Execute multiple cycles to reach lower limit
            FOR index := INT#1 TO INT#5 DO
                elevator.Execute();
            END_FOR;
            
            // Should stop at lower limit without error
            Equal(actual := elevator.GetStatus(), expected := STATUS_NO_CALL);
        END_METHOD
    END_CLASS
END_NAMESPACE