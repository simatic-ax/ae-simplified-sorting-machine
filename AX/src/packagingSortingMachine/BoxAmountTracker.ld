// Version: 1.0.0
FUNCTION_BLOCK BoxAmountTracker
    VAR_INPUT
        addBoxY : BOOL;
        addBoxX : BOOL;
        reset : BOOL;
    END_VAR
    VAR_OUTPUT
        storedBoxes : SortingMachine.typeStorageInterface;
    END_VAR

    {
        xlad_network_title := "Addition for Boxes of type Y";
        xlad_network_comment := "Add to counter only when there is a rising edge and the reset is not set to true"
    }
    NETWORK
        RUNG wire#powerrail
            I_CONTACT( reset )
            P_CONTACT( addBoxY )
            wire#w1
            ADD(
                IN1 := storedBoxes.totalBoxesY,
                IN2 := INT#1,
                OUT => storedBoxes.totalBoxesY
            )
        END_RUNG
        RUNG wire#w1
            ADD(
                IN1 := storedBoxes.totalBoxes,
                IN2 := INT#1,
                OUT => storedBoxes.totalBoxes
            )
        END_RUNG
    END_NETWORK

    {
        xlad_network_title := "Addition for Boxes of type X";
        xlad_network_comment := "Add to counter only when there is a rising edge and the reset is not set to true"
    }
    NETWORK
        RUNG wire#powerrail
            I_CONTACT( reset )
            P_CONTACT( addBoxX )
            wire#w1
            ADD(
                IN1 := storedBoxes.totalBoxesX,
                IN2 := INT#1,
                OUT => storedBoxes.totalBoxesX
            )
        END_RUNG
        RUNG wire#w1
            ADD(
                IN1 := storedBoxes.totalBoxes,
                IN2 := INT#1,
                OUT => storedBoxes.totalBoxes
            )
        END_RUNG
    END_NETWORK

    {
        xlad_network_title := "Reset all values";
        xlad_network_comment := "Reset all the count values to 0"
    }
    NETWORK
        RUNG wire#powerrail
            P_CONTACT( reset )
            wire#w1
            MOVE(
                IN := INT#0,
                OUT1 => storedBoxes.totalBoxes
            )
        END_RUNG
        RUNG wire#w1
            MOVE(
                IN := INT#0,
                OUT1 => storedBoxes.totalBoxesX
            )
        END_RUNG
        RUNG wire#w1
            MOVE(
                IN := INT#0,
                OUT1 => storedBoxes.totalBoxesY
            )
        END_RUNG
    END_NETWORK

END_FUNCTION_BLOCK
