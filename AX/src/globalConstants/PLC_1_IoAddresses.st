CONFIGURATION IoAddresses
    VAR_GLOBAL

        // Module device_drive_g220/drivespd
        device_drive_g220_drivespd_Input AT %IB320 : device_drive_g220_drivespd_Input_Layout;
        device_drive_g220_drivespd_Output AT %QB320 : device_drive_g220_drivespd_Output_Layout;
    END_VAR
END_CONFIGURATION

TYPE
    device_drive_g220_drivespd_Input_Layout : STRUCT
        Signals_0 AT %B0 : WORD;
        Signals_1 AT %B2 : WORD;
    END_STRUCT;
END_TYPE

TYPE
    device_drive_g220_drivespd_Output_Layout : STRUCT
        Signals_2 AT %B0 : WORD;
        Signals_3 AT %B2 : WORD;
    END_STRUCT;
END_TYPE
