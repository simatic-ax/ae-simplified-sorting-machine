// This is an auto-generated file. Do not modify.
FUNCTION_BLOCK BoxAmountTracker
    VAR_INPUT
        addBoxY : BOOL;
        addBoxX : BOOL;
        reset : BOOL;
    END_VAR
    VAR_OUTPUT
        storedBoxes : SortingMachine.typeStorageInterface;
    END_VAR
VAR_TEMP
    _CONTACT_0_1 : BOOL;
    _OUT_BRANCH_0_2 : BOOL;
    _EN_0_3 : BOOL;
    _ENO_0_3 : BOOL;
    _EN_0_5 : BOOL;
    _ENO_0_5 : BOOL;
    _CONTACT_1_1 : BOOL;
    _OUT_BRANCH_1_2 : BOOL;
    _EN_1_3 : BOOL;
    _ENO_1_3 : BOOL;
    _EN_1_5 : BOOL;
    _ENO_1_5 : BOOL;
    _OUT_BRANCH_2_1 : BOOL;
    _EN_2_2 : BOOL;
    _ENO_2_2 : BOOL;
    _EN_2_4 : BOOL;
    _ENO_2_4 : BOOL;
    _EN_2_6 : BOOL;
    _ENO_2_6 : BOOL;
END_VAR
VAR
    _RISING_EDGE_0_2 : IEC.R_TRIG;
    _RISING_EDGE_1_2 : IEC.R_TRIG;
    _RISING_EDGE_2_1 : IEC.R_TRIG;
END_VAR
// NETWORK: 1, Addition for Boxes of type Y
// COMMENT: Add to counter only when there is a rising edge and the reset is not set to true
_CONTACT_0_1 := NOT(reset);
IF (true) THEN
    _RISING_EDGE_0_2(CLK := addBoxY);
END_IF;
_OUT_BRANCH_0_2 := _RISING_EDGE_0_2.Q AND (_CONTACT_0_1);
_EN_0_3 := _OUT_BRANCH_0_2 and TRUE;
IF (_EN_0_3) THEN
    storedBoxes.totalBoxesY := storedBoxes.totalBoxesY + INT#1;
END_IF;
_ENO_0_3 := _EN_0_3;
_ENO_0_3 := _ENO_0_3 and TRUE;
_EN_0_5 := _OUT_BRANCH_0_2 and TRUE;
IF (_EN_0_5) THEN
    storedBoxes.totalBoxes := storedBoxes.totalBoxes + INT#1;
END_IF;
_ENO_0_5 := _EN_0_5;
_ENO_0_5 := _ENO_0_5 and TRUE;
// NETWORK: 2, Addition for Boxes of type X
// COMMENT: Add to counter only when there is a rising edge and the reset is not set to true
_CONTACT_1_1 := NOT(reset);
IF (true) THEN
    _RISING_EDGE_1_2(CLK := addBoxX);
END_IF;
_OUT_BRANCH_1_2 := _RISING_EDGE_1_2.Q AND (_CONTACT_1_1);
_EN_1_3 := _OUT_BRANCH_1_2 and TRUE;
IF (_EN_1_3) THEN
    storedBoxes.totalBoxesX := storedBoxes.totalBoxesX + INT#1;
END_IF;
_ENO_1_3 := _EN_1_3;
_ENO_1_3 := _ENO_1_3 and TRUE;
_EN_1_5 := _OUT_BRANCH_1_2 and TRUE;
IF (_EN_1_5) THEN
    storedBoxes.totalBoxes := storedBoxes.totalBoxes + INT#1;
END_IF;
_ENO_1_5 := _EN_1_5;
_ENO_1_5 := _ENO_1_5 and TRUE;
// NETWORK: 3, Reset all values
// COMMENT: Reset all the count values to 0
IF (true) THEN
    _RISING_EDGE_2_1(CLK := reset);
END_IF;
_OUT_BRANCH_2_1 := _RISING_EDGE_2_1.Q AND (TRUE);
_EN_2_2 := _OUT_BRANCH_2_1 and TRUE;
IF (_EN_2_2) THEN
    storedBoxes.totalBoxes := INT#0;
END_IF;
_ENO_2_2 := _EN_2_2;
_ENO_2_2 := _ENO_2_2 and TRUE;
_EN_2_4 := _OUT_BRANCH_2_1 and TRUE;
IF (_EN_2_4) THEN
    storedBoxes.totalBoxesX := INT#0;
END_IF;
_ENO_2_4 := _EN_2_4;
_ENO_2_4 := _ENO_2_4 and TRUE;
_EN_2_6 := _OUT_BRANCH_2_1 and TRUE;
IF (_EN_2_6) THEN
    storedBoxes.totalBoxesY := INT#0;
END_IF;
_ENO_2_6 := _EN_2_6;
_ENO_2_6 := _ENO_2_6 and TRUE;
;
END_FUNCTION_BLOCK
