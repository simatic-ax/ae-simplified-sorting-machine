// source: Siemens.Unified.Scripting.Extras.500.11.8301.2.gp
/// <reference path="./HMIRuntime-ScreenItems.d.ts" />
/// <reference path="./HMIRuntime-Tags.d.ts" />
/// <reference path="./HMIRuntime-LoggedTags.d.ts" />
/// <reference path="./HMIRuntime-FaceplateItems.d.ts" />
/// <reference path="../ExternalFiles/CustomWebControls/CWC-includes.d.ts" />
type ScreenItemKindScreen='screen';type ScreenItemKindFaceplate='faceplate';type ScreenItemKindSelector<T extends string,U>=U extends ScreenItemKindFaceplate?FaceplateItemType<T>:ScreenItemType<T>;type ScreenItemKind=ScreenItemKindScreen|ScreenItemKindFaceplate;
/** * A file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system. * * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob) */interface Blob{
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/size) */readonly size:number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/type) */readonly type:string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/slice) */
slice(start?:number,end?:number,contentType?:string):Blob;}type BufferSource=ArrayBufferView|ArrayBuffer;type EndingType="native"|"transparent";type BlobPart=BufferSource|Blob|string;interface BlobPropertyBag{endings?:EndingType;type?:string;}declare var Blob:{prototype:Blob;new(blobParts?:BlobPart[],options?:BlobPropertyBag):Blob;};
/**  Used by the ReadPages() method of AlarmLogging to specify the order of alarms.  */declare const enum hmiModificationTimeOrder{
/**  Descending order of the modification time.  */
Descending=0,
/**  Ascending order of the modification time.  */
Ascending=1,}
/**  Used by the InsertElectronicRecord() method to identify the confirmation behaviour.  */declare const enum hmiConfirmationType{
/**  The current action does not require any confirmation.  */
hmiNone=0,
/**  An extra confirmation is required to proceed with the requested action.  */
hmiConfirmationRequired=1,
/**  An extra confirmation and a reason for the change are required to proceed with the requested action.  */
hmiReasonRequired=2,
/**  An extra electronic signature for the change is required to proceed with the requested action.  */
hmiSignatureRequired=4,
/**  An extra electronic signature and a reason for the change are required to proceed with the requested action.  */
hmiSignatureAndCommentRequired=6,}
/**  Used by the InsertElectronicRecord() method to set the operation type.  */declare const enum hmiOperationType{
/**  Indicates that the specified object has been created.  */
hmiCreation=1,
/**  Indicates that the specified object has been modified.  */
hmiUpdate=2,
/**  Indicates that the specified object has been removed.  */
hmiDeletion=3,}
/**  Used by the InsertElectronicRecord() method to identify the required rights for signing behaviour.  */declare const enum hmiAuditRequiredRightsType{
/**  One of the valid signature rights: First or Second signature is required to proceed with the action.  */
hmiSingleAuditRight=0,
/**  A valid electronic signature with First signature right is required to proceed with the requested action.  */
hmiFirstRightOnly=1,
/**  A valid electronic signature with Second signature right is required to proceed with the requested action.  */
hmiSecondRightOnly=2,
/**  Double electronic signatures with First and Second signature rights are required to proceed with the requested action.  */
hmiDoubleAuditRights=3,}
/**  Used by HMIConnection.SetConnectionMode().  */declare const enum hmiConnectionMode{
/**  Disable the connection.  */
Disabled=0,
/**  Enable the connection.  */
Enabled=1,}declare const enum HMIStopRuntimeMode{hmiStopRuntime=0,hmiStopRuntimeAndRebootDevice=1,}
/**  Used by the GetSpecialFolder() method of HMIRuntime.FileSystem.  */declare const enum FolderId{
/**  Special folder of the file system used for temporary files.  */
TempDir=0,
/**  Special folder of the file system containing files of current user.  */
HomeDir=1,}
/**  Used by the Trace method of HMIRuntime to specify the severity level.  */declare const enum hmiSeverity{
/**  Specifies the Info severity level.  */
Info=0,
/**  Specifies the Verbose severity level.  */
Verbose=1,
/**  Specifies the Warning severity level.  */
Warning=2,
/**  Specifies the Error severity level.  */
Error=3,
/**  Specifies the Fatal severity level.  */
Fatal=4,}
/**  Specifies whether an existing ParameterSet is overwritten.  */declare const enum hmiOverwrite{
/**  The ParameterSet is not overwritten.  */
Disabled=0,
/**  The ParameterSet is overwritten.  */
Enabled=1,}
/**  HmiAggregationMode  */declare const enum HmiAggregationMode{
/**  None  */
None=0,
/**  TimeAverageStepped  */
TimeAverageStepped=1,
/**  MinMax  */
MinMax=2,}
/**  HmiAlarmBlock  */declare const enum HmiAlarmBlock{
/**  Undefined  */
Undefined=0,
/**  Alarm Identification.  */
ID=1,
/**  Name  */
Name=2,
/**  Class  */
Class=3,
/**  Priority  */
Priority=4,
/**  Group  */
Group=5,
/**  Origin  */
Origin=6,
/**  Area  */
Area=7,
/**  Selects detailed view of an alarm; contains additionally the info text, the alarm parameter values and comments.  */
Comments=8,
/**  Information  */
Information=9,
/**  Navigate to alarm source aka loop-in-alarm (at the moment only one target, later on context menu with 0..* targets).  */
LoopInAlarm=10,
/**  EventText  */
EventText=11,
/**  AlarmText1  */
AlarmText1=12,
/**  AlarmText2  */
AlarmText2=13,
/**  AlarmText3  */
AlarmText3=14,
/**  AlarmText4  */
AlarmText4=15,
/**  AlarmText5  */
AlarmText5=16,
/**  AlarmText6  */
AlarmText6=17,
/**  AlarmText7  */
AlarmText7=18,
/**  AlarmText8  */
AlarmText8=19,
/**  AlarmText9  */
AlarmText9=20,
/**  AlarmState  */
AlarmState=21,
/**  ModificationTime  */
ModificationTime=22,
/**  RaiseTime  */
RaiseTime=23,
/**  AcknowledgeTime  */
AcknowledgeTime=24,
/**  ClearTime  */
ClearTime=25,
/**  ResetTime  */
ResetTime=26,
/**  SuppresionsState  */
SuppresionsState=27,
/**  EscalationLevel  */
EscalationLevel=28,
/**  Context  */
Context=29,
/**  Duration  */
Duration=30,
/**  AcknowledgmentState  */
AcknowledgmentState=31,
/**  Value  */
Value=32,
/**  ValueQuality  */
ValueQuality=33,
/**  ValueLimit  */
ValueLimit=34,
/**  HostName  */
HostName=36,
/**  UserName  */
UserName=37,
/**  ProcessValue1  */
ProcessValue1=38,
/**  ProcessValue2  */
ProcessValue2=39,
/**  ProcessValue3  */
ProcessValue3=40,
/**  ProcessValue4  */
ProcessValue4=41,
/**  ProcessValue5  */
ProcessValue5=42,
/**  ProcessValue6  */
ProcessValue6=43,
/**  ProcessValue7  */
ProcessValue7=44,
/**  ProcessValue8  */
ProcessValue8=45,
/**  ProcessValue9  */
ProcessValue9=46,
/**  ProcessValue10  */
ProcessValue10=47,
/**  ClassSymbol  */
ClassSymbol=48,
/**  StateText  */
StateText=49,
/**  GroupID  */
GroupID=50,}
/**  HmiAlarmControlID  */declare const enum HmiAlarmControlID{
/**  None  */
None=0,
/**  Operation  */
AlarmStatisticsView=5,
/**  Operation  */
AlarmAnnunciator=7,
/**  Operation  */
SingleAcknowledgment=8,
/**  Operation  */
GroupAcknowledgment=9,
/**  Operation  */
AlwaysShowRecent=10,
/**  Operation  */
SelectionDisplay=11,
/**  Operation  */
DisplayOptionsSetup=12,
/**  Operation  */
DisabledAlarmsSetup=13,
/**  Operation  */
FirstLine=14,
/**  Operation  */
PreviousLine=15,
/**  Operation  */
NextLine=16,
/**  Operation  */
LastLine=17,
/**  Operation  */
InfoTextSetup=18,
/**  Operation  */
CommentsSetup=19,
/**  Operation  */
DisableAlarm=21,
/**  Operation  */
EnableAlarm=22,
/**  Operation  */
ShelveAlarm=23,
/**  Operation  */
UnshelveAlarm=24,
/**  Operation  */
SortSetup=25,
/**  Operation  */
TimeBaseSetup=26,
/**  Operation  */
CopyLines=27,
/**  Operation  */
PreviousPage=28,
/**  Operation  */
NextPage=29,
/**  Output  */
TimeBase=256,
/**  Output  */
Date=257,
/**  Output  */
Time=258,
/**  Output  */
PendingAlarms=259,
/**  Output  */
Alarms=260,
/**  Output  */
PendingAcknowledgeableAlarms=261,
/**  Output  */
PendingShelvedAlarms=262,
/**  Output  */
Selection=263,
/**  Output  */
DisplayOption=264,
/**  Output  */
Disabled=265,
/**  Output  */
HasPendingShelvedAlarms=272,
/**  Output  */
ConnectionStatus=273,
/**  Operation  */
ShowActiveAlarms=31,
/**  Operation  */
ShowLoggedAlarms=32,
/**  Operation  */
ShowLoggedAlarmsUpdated=33,
/**  Operation  */
ShowDefinedAlarms=34,
/**  Operation  */
SingleReset=35,
/**  Operation  */
Export=36,
/**  Operation  */
MoveToNextAcknowledgeableAlarm=37,
/**  Output  */
StartTime=274,
/**  Output  */
EndTime=275,
/**  Output (Describes the active context filter, e.g. product == Apple Juice).  */
CurrentContextHint=276,
/**  Operation (Display "context selection" dialogue).  */
SelectContext=38,
/**  Output  */
StatusText=277,
/**  Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.  */
Custom=65536,
/**  Output (Shows number of alarms that can be resetted).  */
PendingResettableAlarms=278,
/**  Operation (displays "alarm statistics settings" dialogue).  */
StatisticsSetup=39,
/**  Output (shows that the number of records for the statistics view exceeds the MaximumRecords value).  */
MaximumRecordsExceeded=279,
/**  Operation (displays "user profile settings" dialogue).  */
UserProfileSettings=40,}
/**  HmiAlarmSourceType  */declare const enum HmiAlarmSourceType{
/**  NotConfigured  */
NotConfigured=0,
/**  ActiveAlarms  */
ActiveAlarms=1,
/**  Historical data (replaces Classic's short term, but does not differentiate between short and long term anymore in IOWA).  */
LoggedAlarms=2,
/**  Historical data, updates in the archive get notified.  */
LoggedAlarmsUpdated=3,
/**  The configuration view consideres the flags defined in ConfigurationViewSetup.  */
AlarmDefinition=4,
/**  AlarmStatistics  */
AlarmStatistics=5,}
/**  HmiAlarmStatisticBlock  */declare const enum HmiAlarmStatisticBlock{
/**  Undefined  */
Undefined=0,
/**  Average time between raise event of annunciated alarms and the raise event of subsequent annunciated alarms.  */
AverageRaisedRaised=4097,
/**  Average time between raise event of annunciated alarms and their clear event.  */
AverageRaisedCleared=4098,
/**  Average time between raise event of annunciated alarms and their acknowledgment.  */
AverageRaisedAcknowledged=4099,
/**  Average time between raise event of annunciated alarms and their reset.  */
AverageRaisedReset=4100,
/**  Number of annunciated alarms per time [hour|day|…].  */
Frequency=4101,
/**  Sum of times between raise event of annunciated alarms and the raise event of subsequent annunciated alarms.  */
SumRaisedRaised=4102,
/**  Sum of times between raise event of annunciated alarms and their clear event .  */
SumRaisedCleared=4103,
/**  Sum of times between raise event of annunciated alarms and their acknowledgment .  */
SumRaisedAcknowledged=4104,
/**  Sum of times between raise event of annunciated alarms and their reset .  */
SumRaisedReset=4105,
/**  ID  */
ID=1,
/**  Name  */
Name=2,
/**  Class  */
Class=3,
/**  Priority  */
Priority=4,
/**  Group  */
Group=5,
/**  Origin  */
Origin=6,
/**  Area  */
Area=7,
/**  Comments  */
Comments=8,
/**  Information  */
Information=9,
/**  LoopInAlarm  */
LoopInAlarm=10,
/**  EventText  */
EventText=11,
/**  AlarmText1  */
AlarmText1=12,
/**  AlarmText2  */
AlarmText2=13,
/**  AlarmText3  */
AlarmText3=14,
/**  AlarmText4  */
AlarmText4=15,
/**  AlarmText5  */
AlarmText5=16,
/**  AlarmText6  */
AlarmText6=17,
/**  AlarmText7  */
AlarmText7=18,
/**  AlarmText8  */
AlarmText8=19,
/**  AlarmText9  */
AlarmText9=20,
/**  AlarmState  */
AlarmState=21,
/**  ModificationTime  */
ModificationTime=22,
/**  RaiseTime  */
RaiseTime=23,
/**  AcknowledgeTime  */
AcknowledgeTime=24,
/**  ClearTime  */
ClearTime=25,
/**  ResetTime  */
ResetTime=26,
/**  SuppressionState  */
SuppressionState=27,
/**  EscalationLevel  */
EscalationLevel=28,
/**  Context  */
Context=29,
/**  Duration  */
Duration=30,
/**  AcknowledgmentState  */
AcknowledgmentState=31,
/**  Value  */
Value=32,
/**  ValueQuality  */
ValueQuality=33,
/**  ValueLimit  */
ValueLimit=34,
/**  TagName  */
TagName=35,
/**  Computer  */
Computer=36,
/**  User  */
User=37,
/**  ProcessValue1  */
ProcessValue1=38,
/**  ProcessValue2  */
ProcessValue2=39,
/**  ProcessValue3  */
ProcessValue3=40,
/**  ProcessValue4  */
ProcessValue4=41,
/**  ProcessValue5  */
ProcessValue5=42,
/**  ProcessValue6  */
ProcessValue6=43,
/**  ProcessValue7  */
ProcessValue7=44,
/**  ProcessValue8  */
ProcessValue8=45,
/**  ProcessValue9  */
ProcessValue9=46,
/**  ProcessValue10  */
ProcessValue10=47,
/**  ClassSymbol  */
ClassSymbol=48,
/**  StateText  */
StateText=49,}
/**  HmiApplicationState  */declare const enum HmiApplicationState{
/**  None  */
None=0,
/**  Running  */
Running=1,
/**  Terminated  */
Terminated=2,
/**  Crashed  */
Crashed=3,
/**  CreateFailed  */
CreateFailed=4,}
/**  HmiBackgroundFillMode  */declare const enum HmiBackgroundFillMode{
/**  The background is filled to fit the windows’s size.  */
Window=0,
/**  The background is filled to fit the screen's size.  */
Screen=1,}
/**  HmiBarMode  */declare const enum HmiBarMode{
/**  Segmented  */
Segmented=0,
/**  Was "Entire".  */
Unicolor=1,
/**  Full segments are in background. ProcessValueIndicator is moving in front of segments. Migration hint: Was called ColorGradient:Segmented in TIA Portal v14.  */
SegmentedStatic=2,
/**  Background color changes according to current process value and limit colors. ProcessValueIndicator is moving in front of segments.  */
UnicolorStatic=3,}
/**  HmiCapType  */declare const enum HmiCapType{
/**  Caps are drawn outside of line end's coordinates with a factor of width/2.  */
Square=256,
/**  Caps are drawn outside of line end's coordinates with a factor of width/2.  */
Round=0,
/**  Caps intersects the line end's coordinates. (Migration hint: Was called "Flush" in Classic).  */
Flat=512,}
/**  HmiCharSet  */declare const enum HmiCharSet{
/**  Depends on OS setting (at runtime).  */
Console=0,
/**  UTF8  */
UTF8=1,
/**  UTF16  */
UTF16=2,}
/**  HmiClientInfoType  */declare const enum HmiClientInfoType{
/**  None  */
None=0,
/**  Width of primary display in DIU.  */
PrimaryDisplayWidth=1,
/**  Height of primary display in DIU.  */
PrimaryDisplayHeight=2,
/**  Ratio of pixel to DIU for primary display (e.g. 1.5: 1000 DIU = 1500 pixel).  */
PrimaryDisplayPixelRatio=3,}
/**  HmiContentMode  */declare const enum HmiContentMode{
/**  Graphic has priority. If no graphic is available, text is used instead.  */
GraphicOrText=0,
/**  GraphicAndText  */
GraphicAndText=1,
/**  Text  */
Text=2,
/**  Graphic  */
Graphic=3,}
/**  HmiDashType  */declare const enum HmiDashType{
/**  Solid  */
Solid=0,
/**  Dash  */
Dash=1,
/**  Dot  */
Dot=2,
/**  DashDot  */
DashDot=3,
/**  DashDotDot  */
DashDotDot=4,}
/**  HmiDataGridHeaderType  */declare const enum HmiDataGridHeaderType{
/**  None  */
None=0,
/**  Number indicating the current line number or comparable.  */
Index=1,
/**  Applies only for columns. For rows to be considered later. The content feature settings is used.  */
Content=2,}
/**  HmiDetailedParameterControlBlock  */declare const enum HmiDetailedParameterControlBlock{
/**  None  */
None=0,
/**  Has to be available always.  */
ParameterSetElementName=1,
/**  Has to be available always.  */
ParameterSetValue=2,
/**  ParameterSetElementUnit  */
ParameterSetElementUnit=3,}
/**  HmiDetailedParameterControlID  */declare const enum HmiDetailedParameterControlID{
/**  None  */
None=0,
/**  Operation  */
Save=49,
/**  Operation  */
Create=48,
/**  Operation  */
SaveAs=50,
/**  Operation  */
Delete=51,
/**  Operation  */
Rename=52,
/**  Operation  */
WriteToPLC=53,
/**  Operation  */
ReadFromPLC=54,
/**  Output  */
StatusText=256,
/**  Operation  */
Export=36,
/**  Operation  */
Import=37,
/**  Operation  */
Cancel=38,
/**  Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.  */
Custom=65536,}
/**  HmiDisplayViewType  */declare const enum HmiDisplayViewType{
/**  Default-specific default... usually list.  */
Standard=0,
/**  List  */
List=1,
/**  Details  */
Details=2,
/**  SmallIcons  */
SmallIcons=3,
/**  MediumIcons  */
MediumIcons=4,
/**  LargeIcons  */
LargeIcons=5,}
/**  HmiEditMode  */declare const enum HmiEditMode{
/**  None  */
None=0,
/**  Update  */
Update=1,
/**  Create  */
Create=2,
/**  Delete  */
Delete=4,}
/**  HmiEventTrigger  */declare const enum HmiEventTrigger{
/**  Unknown  */
Unknown=0,
/**  The event was triggered by a touch device.  */
Touch=1,
/**  The event was triggered by the left button of a mouse device.  */
Left=16,
/**  The event was triggered by the middle button of a mouse device.  */
Middle=17,
/**  The event was triggered by the right button of a mouse device.  */
Right=18,
/**  The event was triggered by the enter key of a keyboard.  */
Enter=256,
/**  The event was triggered by the space key of a keyboard.  */
Space=257,
/**  The event was triggered by the escape key of a keyboard.  */
Escape=258,}
/**  HmiFillDirection  */declare const enum HmiFillDirection{
/**  BottomToTop  */
BottomToTop=0,
/**  TopToBottom  */
TopToBottom=1,
/**  LeftToRight  */
LeftToRight=2,
/**  RightToLeft  */
RightToLeft=3,}
/**  HmiFillPattern  */declare const enum HmiFillPattern{
/**  Solid  */
Solid=0,
/**  Transparent  */
Transparent=65536,
/**  BackwardDiagonal  */
BackwardDiagonal=131075,
/**  Cross  */
Cross=131076,
/**  DiagonalCross  */
DiagonalCross=131077,
/**  ForwardDiagonal  */
ForwardDiagonal=131074,
/**  Horizontal  */
Horizontal=131072,
/**  Vertical  */
Vertical=131073,
/**  GradientHorizontal  */
GradientHorizontal=1048576,
/**  GradientVertical  */
GradientVertical=1048577,
/**  GradientForwardDiagonal  */
GradientForwardDiagonal=1048578,
/**  GradientBackwardDiagonal  */
GradientBackwardDiagonal=1048579,
/**  GradientHorizontalTricolor  */
GradientHorizontalTricolor=1048832,
/**  GradientVerticalTricolor  */
GradientVerticalTricolor=1048833,
/**  GradientForwardDiagonalTricolor  */
GradientForwardDiagonalTricolor=1048834,
/**  GradientBackwardDiagonalTricolor  */
GradientBackwardDiagonalTricolor=1048835,}
/**  HmiFlashingCondition  */declare const enum HmiFlashingCondition{
/**  Never  */
Never=0,
/**  Always  */
Always=1,
/**  RangeViolation  */
RangeViolation=2,}
/**  HmiFlashingRate  */declare const enum HmiFlashingRate{
/**  2 s.  */
Slow=0,
/**  1 s.  */
Medium=1,
/**  500 ms.  */
Fast=2,
/**  Flashing disabled.  */
None=255,}
/**  HmiFlipMode  */declare const enum HmiFlipMode{
/**  None  */
None=0,
/**  Flipping horizontal means flipping against vertical axis.  */
Horizontal=1,}
/**  HmiFontStrikeOut  */declare const enum HmiFontStrikeOut{
/**  None  */
None=0,
/**  Single  */
Single=1,}
/**  HmiFontWeight  */declare const enum HmiFontWeight{
/**  Light  */
Light=300,
/**  Normal  */
Normal=400,
/**  SemiBold  */
SemiBold=600,
/**  Bold  */
Bold=700,
/**  None  */
None=0,}
/**  HmiFunctionTrendControlID  */declare const enum HmiFunctionTrendControlID{
/**  None  */
None=0,
/**  Operation  */
Ruler=3,
/**  Operation  */
ZoomArea=4,
/**  Operation  */
ZoomPlusMinus=5,
/**  Operation  */
ZoomXAxisPlusMinus=7,
/**  Operation  */
ZoomYAxisPlusMinus=8,
/**  Operation  */
MoveTrendArea=9,
/**  Operation  */
MoveAxesArea=10,
/**  Operation  */
OriginalView=11,
/**  Operation  */
SelectDataConnection=12,
/**  Operation  */
SelectTrends=13,
/**  Operation  */
SelectTimeRange=14,
/**  Operation  */
PreviousTrend=15,
/**  Operation  */
NextTrend=16,
/**  Operation  */
StartStop=17,
/**  Output  */
ConnectionStatus=256,
/**  Operation  */
Print=30,
/**  Operation  */
Export=36,
/**  Output  */
StatusText=277,
/**  Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.  */
Custom=65536,
/**  Operation (displays "user profile settings" dialogue).  */
UserProfileSettings=37,}
/**  HmiGesture  */declare const enum HmiGesture{
/**  SwipeLeft  */
SwipeLeft=1,
/**  SwipeRight  */
SwipeRight=2,
/**  SwipeUp  */
SwipeUp=3,
/**  SwipeDown  */
SwipeDown=4,
/**  Unknown  */
Unknown=0,}
/**  HmiGmpSetting  */declare const enum HmiGmpSetting{
/**  None  */
None=0,
/**  LogOperation  */
GmpRelevant=1,
/**  AskOperationMotive  */
CommentRequired=2,
/**  AcknowledgmentConfirmation  */
AcknowledgmentConfirmation=4,
/**  ElectronicSignatureConfirmation  */
ElectronicSignatureConfirmation=8,}
/**  HmiGraphicStretchMode  */declare const enum HmiGraphicStretchMode{
/**  The graphic is not scaled and centered if not configured explicitly via a separate property.  */
None=0,
/**  Was "Stretch".  */
Fill=1,
/**  The graphic uses all the available space of the control without changing the aspect ratio. The graphic is not clipped, there might be transparent space either horizontally or vertically.  */
Uniform=2,
/**  The graphic uses all the available space of the control without changing the aspect ratio. The graphic is clipped so that there is no transparent space either horizontally or vertically.  */
UniformToFill=3,
/**  The graphic is not scaled but repeated in a tiled fashion.  */
Tiled=4,}
/**  HmiGraphOverviewBlock  */declare const enum HmiGraphOverviewBlock{
/**  Undefined  */
Undefined=0,
/**  Step  */
Step=1,
/**  Step Name.  */
StepName=2,}
/**  HmiGridColoringMode  */declare const enum HmiGridColoringMode{
/**  None  */
None=0,
/**  Columns  */
Columns=1,
/**  Rows  */
Rows=2,}
/**  HmiGridLine  */declare const enum HmiGridLine{
/**  None  */
None=0,
/**  Vertical Coarse.  */
VerticalMajor=1,
/**  Horizontal Coarse.  */
HorizontalMajor=2,
/**  Vertical Fine.  */
VerticalMinor=4,
/**  Horizontal Fine.  */
HorizontalMinor=8,}
/**  HmiGridSelectionMode  */declare const enum HmiGridSelectionMode{
/**  None  */
None=0,
/**  Single  */
Single=1,
/**  Multi  */
Multi=2,}
/**  HmiHorizontalAlignment  */declare const enum HmiHorizontalAlignment{
/**  Left  */
Left=0,
/**  Center  */
Center=1,
/**  Right  */
Right=2,
/**  Only applicable with layout containers; fallback behaves like Center.  */
Stretch=3,}
/**  HmiIOFieldType  */declare const enum HmiIOFieldType{
/**  Output  */
Output=0,
/**  InputOutput  */
InputOutput=2,}
/**  HmiKeyboardModifier  */declare const enum HmiKeyboardModifier{
/**  None  */
None=0,
/**  Control  */
Control=1,
/**  Shift  */
Shift=2,
/**  Alt  */
Alt=4,}
/**  HmiLineEndType  */declare const enum HmiLineEndType{
/**  Line  */
Line=0,
/**  Was "Arrow".  */
EmptyArrow=1,
/**  Was "FilledArrow".  */
Arrow=2,
/**  Was "FilledArrowReversed".  */
ReversedArrow=3,
/**  Was "Circle".  */
EmptyCircle=5,
/**  Was "FilledCircle".  */
Circle=6,}
/**  HmiLineJoinType  */declare const enum HmiLineJoinType{
/**  Round  */
Round=0,
/**  Was "Flat".  */
Bevel=4096,
/**  Was "Pointed".  */
Miter=8192,}
/**  HmiMarkerType  */declare const enum HmiMarkerType{
/**  None  */
None=0,
/**  Point  */
Point=1,
/**  Square  */
Square=2,
/**  Circle  */
Circle=3,
/**  Graphic  */
Graphic=4,}
/**  HmiMeasurementUnit  */declare const enum HmiMeasurementUnit{
/**  None  */
None=0,
/**  E.g. "Kilogramm".  */
Name=1,
/**  E.g. "kg".  */
Symbol=2,}
/**  HmiMediaControlID  */declare const enum HmiMediaControlID{
/**  None  */
None=0,
/**  Operation  */
Play=1,
/**  Operation  */
Pause=2,
/**  Operation  */
Stop=3,
/**  Operation  */
SeekForward=4,
/**  Operation  */
SeekBackward=5,
/**  Output  */
StatusText=277,
/**  Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.  */
Custom=65536,
/**  Operation  */
Mute=6,}
/**  HmiOpenLinkMode  */declare const enum HmiOpenLinkMode{
/**  None  */
None=0,
/**  Create or terminate external process.  */
Create=1,
/**  Create pipe and close pipe.  */
CreateAndConnect=2,
/**  Use a named pipe that already exists; (connect and disconnect).  */
Connect=3,}
/**  HmiOperability  */declare const enum HmiOperability{
/**  Operable  */
Operable=0,
/**  DisabledProgrammatically  */
DisabledProgrammatically=1,
/**  NoAuthorization  */
NoAuthorization=2,
/**  NoExplicitUnlock  */
NoExplicitUnlock=4,}
/**  HmiOrientation  */declare const enum HmiOrientation{
/**  Horizontal  */
Horizontal=0,
/**  Vertical  */
Vertical=1,}
/**  HmiOverviewParameterControlBlock  */declare const enum HmiOverviewParameterControlBlock{
/**  None  */
None=0,
/**  ParameterSetID  */
ParameterSetID=1,
/**  LastUser  */
LastUser=2,
/**  LastAccess  */
LastAccess=3,
/**  Generic columns; starting at 1.  */
ParameterSetElementOdd=4,
/**  Generic columns; starting at 2.  */
ParameterSetElementEven=5,}
/**  HmiOverviewParameterControlID  */declare const enum HmiOverviewParameterControlID{
/**  None  */
None=0,
/**  Operation  */
Help=1,
/**  Operation  */
Configuration=2,
/**  Operation  */
FirstLine=3,
/**  Operation  */
PreviousLine=4,
/**  Operation  */
NextLine=5,
/**  Operation  */
LastLine=6,
/**  Output  */
TimeBase=256,
/**  Output  */
Date=257,
/**  Output  */
Time=258,
/**  Output  */
Column=259,
/**  Output  */
Row=260,
/**  Output  */
ParameterSetTypeName=261,
/**  Output  */
ConnectionStatus=262,
/**  Output  */
Selection=263,
/**  Operation  */
DeleteLine=7,
/**  Operation  */
CutLine=8,
/**  Operation  */
CopyLine=9,
/**  Operation  */
InsertLine=16,
/**  Operation  */
WriteToPLC=17,
/**  Operation  */
ReadFromPLC=18,
/**  Output  */
Status=264,
/**  Operation  */
SortSetup=19,
/**  Operation  */
TimeBaseSetup=20,
/**  Operation  */
SelectParameterSetType=21,
/**  Operation  */
Print=30,
/**  Operation  */
Export=36,
/**  Operation  */
Import=37,
/**  Operation  */
Cancel=38,
/**  Output  */
StatusText=277,
/**  Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.  */
Custom=65536,}
/**  HmiPeakIndicator  */declare const enum HmiPeakIndicator{
/**  None  */
None=0,
/**  Low  */
Low=1,
/**  High  */
High=2,}
/**  HmiPersistencyScope  */declare const enum HmiPersistencyScope{
/**  Settings are persisted for the current user.  */
User=0,
/**  Settings are persisted for all users.  */
Global=1,}
/**  HmiPipeConnectionState  */declare const enum HmiPipeConnectionState{
/**  Initial state or closed.  */
Unavailable=0,
/**  Connected  */
Connected=1,
/**  Disconnected  */
Disconnected=2,}
/**  HmiProcessControlID  */declare const enum HmiProcessControlID{
/**  None  */
None=0,
/**  Operation  */
FirstRecord=3,
/**  Operation  */
PreviousRecord=4,
/**  Operation  */
NextRecord=5,
/**  Operation  */
LastRecord=6,
/**  Operation  */
Edit=7,
/**  Operation  */
SelectDataConnection=9,
/**  Operation  */
SelectTimeRange=11,
/**  Operation  */
PreviousColumn=12,
/**  Operation  */
NextColumn=13,
/**  Operation  */
StartStop=14,
/**  Operation  */
CreateArchiveValue=17,
/**  Output  */
TimeBase=256,
/**  Output  */
Date=257,
/**  Output  */
Time=258,
/**  Output  */
ConnectionStatus=259,
/**  Output  */
Column=260,
/**  Output  */
Row=261,
/**  Operation  */
Export=36,
/**  Output  */
StartTime=274,
/**  Output  */
EndTime=275,
/**  Output (Describes the active context filter, e.g. product == Apple Juice).  */
CurrentContextHint=276,
/**  Operation  */
DeleteArchiveValue=18,
/**  Output  */
StatusText=277,
/**  Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.  */
Custom=65536,}
/**  HmiProcessDiagnosisCriteriaAnalysisBlock  */declare const enum HmiProcessDiagnosisCriteriaAnalysisBlock{
/**  SymbolName  */
SymbolName=0,
/**  Address  */
Address=1,
/**  Value  */
Value=2,
/**  Comment  */
Comment=3,}
/**  HmiProcessDiagnosisCriteriaAnalysisControlID  */declare const enum HmiProcessDiagnosisCriteriaAnalysisControlID{
/**  None  */
None=0,
/**  ConnectionStatus  */
ConnectionStatus=256,}
/**  HmiProcessDiagnosisDetailViewType  */declare const enum HmiProcessDiagnosisDetailViewType{
/**  PLC Code Viewer will not show the detail view if value is None.  */
None=0,
/**  PLC Code Viewer will show ladder diagram if this enum value is set.  */
Ladder=1,
/**  PLC Code Viewer will show function block diagram if this enum value is set.  */
FunctionBlock=2,}
/**  HmiProcessDiagnosisGraphOverviewControlID  */declare const enum HmiProcessDiagnosisGraphOverviewControlID{
/**  None  */
None=0,
/**  NextStep  */
NextStep=1,
/**  JumpToAlarmControl  */
JumpToAlarmControl=2,
/**  JumpToPlcCodeViewer  */
JumpToPlcCodeViewer=3,
/**  JumpToTiaPortal  */
JumpToTiaPortal=4,
/**  CriteriaAnalysis  */
CriteriaAnalysis=256,
/**  StepState  */
StepState=257,
/**  ConnectionStatus  */
ConnectionStatus=258,}
/**  HmiProcessDiagnosisOverviewControlID  */declare const enum HmiProcessDiagnosisOverviewControlID{
/**  None  */
None=0,
/**  JumpToAlarmControl  */
JumpToAlarmControl=1,
/**  Information  */
Information=256,
/**  ConnectionStatus  */
ConnectionStatus=257,}
/**  HmiProcessDiagnosisPlcCodeViewerControlID  */declare const enum HmiProcessDiagnosisPlcCodeViewerControlID{
/**  None  */
None=0,
/**  Previous  */
Previous=1,
/**  Next  */
Next=2,
/**  ZoomIn  */
ZoomIn=3,
/**  ZoomOut  */
ZoomOut=4,
/**  ToggleGRAPHMode  */
ToggleGRAPHMode=5,
/**  ToggleDetailView  */
ToggleDetailView=7,
/**  ToggleCriteriaAnalysis  */
ToggleCriteriaAnalysis=8,
/**  ConnectionStatus  */
ConnectionStatus=256,
/**  StatusText  */
StatusText=257,}
/**  HmiProcessIndicatorMode  */declare const enum HmiProcessIndicatorMode{
/**  Bar  */
Bar=0,
/**  Hair-Line or Needle, depends on the actual screen item. Does not show the process value itself (as number).  */
Indicator=1,
/**  Floater or comparable, carries also the process value.  */
DetailedIndicator=2,
/**  BarWithDetailedIndicator  */
BarWithDetailedIndicator=3,}
/**  HmiQuality  */declare const enum HmiQuality{
/**  Bad  */
Bad=1,
/**  Uncertain  */
Uncertain=2,
/**  Good  */
Good=4,
/**  UpperLimitViolation  */
UpperLimitViolation=64,
/**  LowerLimitViolation  */
LowerLimitViolation=128,
/**  Uninitialized or undefined.  */
None=0,}
/**  HmiRequestResult  */declare const enum HmiRequestResult{
/**  None  */
None=0,
/**  Request was successful.  */
Success=1,
/**  Request was rejected because of missing authorization.  */
AccessDenied=2,}
/**  HmiResourceListType  */declare const enum HmiResourceListType{
/**  Undefined  */
Undefined=0,
/**  Text  */
Text=1,
/**  Graphic  */
Graphic=2,
/**  TextAndGraphic  */
TextAndGraphic=3,}
/**  HmiRotationCenterPlacement  */declare const enum HmiRotationCenterPlacement{
/**  In DIU. In absence of HmiBoxFeature absolute in relation to CenterX, CenterY, otherwise in relation to the box's natural center pointer.  */
AbsoluteFromCenter=0,
/**  In absence of HmiBoxFeature relative to CenterX, CenterY, otherwise relative to the box's natural center pointer. From -1 .. center .. 1 according to bounding box, surface or radius. (Values are not limited to the range of -1 and 1, rotation center can also be outside of the item).  */
NormedFromCenter=1,
/**  In DIU. Absolute distance in relation to the screen's 0,0-point (Top, Left).  */
AbsoluteToContainer=2,}
/**  HmiScaleMode  */declare const enum HmiScaleMode{
/**  None  */
None=0,
/**  Labels  */
Labels=1,
/**  Ticks  */
Ticks=2,}
/**  HmiScalingType  */declare const enum HmiScalingType{
/**  Linear  */
Linear=0,
/**  Logarithmic  */
Logarithmic=1,
/**  NegativeLogarithmic  */
NegativeLogarithmic=2,
/**  Tangent  */
Tangent=4,
/**  Quadratic  */
Quadratic=5,
/**  Cubic  */
Cubic=6,}
/**  HmiScreenWindowAdaption  */declare const enum HmiScreenWindowAdaption{
/**  Neither the screen nor the screen window does adapt their sizes.  */
None=0,
/**  The screen window adapts its size to fit to the configured screen that is cur-rently shown. To achieve this, the window is resized accordingly.  */
WindowToScreen=1,
/**  The screen adapts its size to fit to the configured window it is hosted in. To achieve this, the screen is zoomed accordingly.  */
ScreenToWindow=2,}
/**  HmiScrollBarVisibility  */declare const enum HmiScrollBarVisibility{
/**  The scrollbar is only shown if the content is larger than the available space.  */
Automatic=0,
/**  The scrollbar is shown.  */
Visible=1,
/**  The scrollbar is hidden and does not require any space in the UI.  */
Collapsed=2,}
/**  HmiSelectionMode  */declare const enum HmiSelectionMode{
/**  For Checkboxes.  */
NonExclusive=0,
/**  For Radio buttons.  */
Exclusive=1,}
/**  HmiSimpleGridLine  */declare const enum HmiSimpleGridLine{
/**  None  */
None=0,
/**  Vertical  */
Vertical=1,
/**  Horizontal  */
Horizontal=2,}
/**  HmiSimplePosition  */declare const enum HmiSimplePosition{
/**  Left applies for vertical orientation, top for horizontal.  */
LeftOrTop=0,
/**  Right applies for vertical orientation, bottom for horizontal.  */
RightOrBottom=1,}
/**  HmiSortDirection  */declare const enum HmiSortDirection{
/**  None  */
None=0,
/**  Ascending  */
Ascending=1,
/**  Descending  */
Descending=2,}
/**  HmiSourceState  */declare const enum HmiSourceState{
/**  Idle  */
Idle=0,
/**  Busy  */
Busy=1,}
/**  HmiSymbolEffect  */declare const enum HmiSymbolEffect{
/**  None  */
None=0,
/**  UseEffectColor  */
UseEffectColor=1,}
/**  HmiSystemDiagnosisControlBlock  */declare const enum HmiSystemDiagnosisControlBlock{
/**  Undefined  */
Undefined=0,
/**  Number  */
Number=1,
/**  DateTime  */
DateTime=2,
/**  EventMessage  */
EventMessage=3,
/**  EventType  */
EventType=4,
/**  EventState  */
EventState=5,}
/**  HmiSystemDiagnosisControlID  */declare const enum HmiSystemDiagnosisControlID{
/**  None  */
None=0,
/**  Operation  */
Previous=2,
/**  Operation  */
Next=3,
/**  Operation  */
Reload=6,
/**  Operation  */
Home=5,
/**  Shows the current path, e.g. "Line_5 / PLC_1".  */
Path=256,
/**  Output  */
ConnectionStatus=273,
/**  Operation  */
FirstLine=14,
/**  Operation  */
PreviousLine=15,
/**  Operation  */
NextLine=16,
/**  Operation  */
LastLine=17,
/**  Operation (to be used for toggling).  */
SplitView=18,
/**  Operation (goes back to MatrivView or previous MatxrixView).  */
Back=19,
/**  Operation  */
ShowDiagnosticBuffer=20,}
/**  HmiSystemDiagnosisMatrixBlock  */declare const enum HmiSystemDiagnosisMatrixBlock{
/**  Undefined  */
Undefined=0,
/**  Status  */
Status=1,
/**  Name  */
Name=2,
/**  OperatingState  */
OperatingState=3,
/**  Rack  */
Rack=4,
/**  Slot  */
Slot=5,
/**  OrderNumber  */
OrderNumber=6,
/**  Address  */
Address=7,
/**  PlantDesignation  */
PlantDesignation=8,
/**  LocationIdentifier  */
LocationIdentifier=9,
/**  Subsystem  */
Subsystem=10,
/**  Station  */
Station=11,
/**  Subslot  */
Subslot=12,
/**  SubAddress  */
SubAddress=13,
/**  SoftwareVersion  */
SoftwareVersion=14,
/**  Installation  */
Installation=15,
/**  AdditionaInformation  */
AdditionaInformation=16,
/**  ErrorDescription  */
ErrorDescription=17,
/**  ManufacturerID  */
ManufacturerID=18,
/**  HardwareVersion  */
HardwareVersion=19,
/**  ProfileID  */
ProfileID=20,
/**  SpecificProfileData  */
SpecificProfileData=21,
/**  IandMDataVersion  */
IandMDataVersion=22,
/**  SerialNumber  */
SerialNumber=23,
/**  RevisionCounter  */
RevisionCounter=24,
/**  Type  */
Type=25,
/**  IPAddress  */
IPAddress=32,}
/**  HmiSystemDiagnosisViewType  */declare const enum HmiSystemDiagnosisViewType{
/**  Diagnosis  */
Diagnosis=0,
/**  Matrix  */
Matrix=1,
/**  DistributedIO  */
DistributedIO=2,}
/**  HmiTextPosition  */declare const enum HmiTextPosition{
/**  Left  */
Left=0,
/**  Right  */
Right=1,
/**  Top  */
Top=2,
/**  Bottom  */
Bottom=3,
/**  Behind  */
Behind=4,
/**  InFront  */
InFront=5,}
/**  HmiTextTrimming  */declare const enum HmiTextTrimming{
/**  None  */
None=0,
/**  Ellipsis are always at the end.  */
CharacterEllipsis=1,}
/**  HmiTextWrapping  */declare const enum HmiTextWrapping{
/**  NoWrap  */
NoWrap=0,
/**  WordWrap  */
WordWrap=1,}
/**  HmiThresholdIndicator  */declare const enum HmiThresholdIndicator{
/**  None  */
None=0,
/**  Lines  */
Lines=1,
/**  Markers  */
Markers=2,}
/**  HmiThresholdMode  */declare const enum HmiThresholdMode{
/**  Undefined  */
Undefined=0,
/**  Upper  */
Upper=1,
/**  Lower  */
Lower=2,
/**  Normal  */
Normal=3,
/**  Minimum  */
Minimum=4,
/**  Maximum  */
Maximum=5,}
/**  HmiTimeRangeBase  */declare const enum HmiTimeRangeBase{
/**  Undefined  */
Undefined=0,
/**  Millisecond  */
Millisecond=1,
/**  Second  */
Second=2,
/**  Minute  */
Minute=3,
/**  Hour  */
Hour=4,
/**  Day  */
Day=5,
/**  Month  */
Month=6,
/**  Year  */
Year=7,}
/**  HmiTimeRangeStart  */declare const enum HmiTimeRangeStart{
/**  The time range starts from the current time.  */
Now=0,
/**  The time range starts from a fixed time (BeginTime property).  */
Fixed=1,}
/**  HmiTimeRangeType  */declare const enum HmiTimeRangeType{
/**  TimeRange  */
TimeRange=0,
/**  FromBeginToEnd  */
FromBeginToEnd=1,
/**  PointCount  */
PointCount=2,}
/**  HmiTrendCompanionID  */declare const enum HmiTrendCompanionID{
/**  None  */
None=0,
/**  Operation  */
RulerWindow=3,
/**  Operation  */
DefineStatisticsArea=4,
/**  Operation  */
CalculateStatistics=5,
/**  Output  */
TimeBase=256,
/**  Output  */
Date=257,
/**  Output  */
Time=258,
/**  Output  */
Column=259,
/**  Output  */
Row=260,
/**  Output  */
Source=261,
/**  Output  */
ConnectionStatus=262,
/**  Operation  */
Print=30,
/**  Operation  */
Export=36,
/**  Output  */
StatusText=277,
/**  Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.  */
Custom=65536,}
/**  HmiTrendCompanionMode  */declare const enum HmiTrendCompanionMode{
/**  Ruler  */
Ruler=0,
/**  StatisticArea  */
StatisticArea=1,
/**  StatisticResult  */
StatisticResult=2,}
/**  HmiTrendControlID  */declare const enum HmiTrendControlID{
/**  None  */
None=0,
/**  Operation  */
FirstRecord=2,
/**  Operation  */
PreviousRecord=3,
/**  Operation  */
NextRecord=4,
/**  Operation  */
LastRecord=5,
/**  Operation  */
Ruler=6,
/**  Operation  */
ZoomArea=7,
/**  Operation  */
ZoomPlusMinus=8,
/**  Operation  */
ZoomTimeAxisPlusMinus=9,
/**  Operation  */
ZoomValueAxisPlusMinus=10,
/**  Operation  */
MoveTrendArea=11,
/**  Operation  */
MoveAxesArea=12,
/**  Operation  */
OriginalView=13,
/**  Operation  */
SelectDataConnection=14,
/**  Operation  */
SelectTrends=15,
/**  Operation  */
SelectTimeRange=16,
/**  Operation  */
PreviousTrend=17,
/**  Operation  */
NextTrend=18,
/**  Operation  */
StartStop=19,
/**  Operation  */
DefineStatisticsArea=20,
/**  Operation  */
CalculateStatistics=21,
/**  Output  */
TimeBase=256,
/**  Output  */
Date=257,
/**  Output  */
Time=258,
/**  Output  */
ConnectionStatus=259,
/**  Operation  */
Print=30,
/**  Operation  */
Export=36,
/**  Operation (Display the "context selection" dialogue.).  */
SelectContext=38,
/**  Output (actual value only available if start time is selected via context selection dialogue.).  */
StartTime=274,
/**  Output (actual value only available if end time is selected via context selection dialogue.).  */
EndTime=275,
/**  Output (Describes the active context filter, e.g. product == Apple Juice).  */
CurrentContextHint=276,
/**  Output  */
StatusText=277,
/**  Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.  */
Custom=65536,
/**  Operation (displays "user profile settings" dialogue).  */
UserProfileSettings=39,}
/**  HmiTrendInfoBlock  */declare const enum HmiTrendInfoBlock{
/**  None  */
None=0,
/**  Name  */
Name=1,
/**  Index  */
Index=2,
/**  Label  */
Label=3,
/**  Show  */
Show=4,
/**  TagNameY  */
TagNameY=5,
/**  TagNameX  */
TagNameX=6,
/**  YValue  */
YValue=7,
/**  XValueOrTimestamp  */
XValueOrTimestamp=8,
/**  YValueLowerLimit  */
YValueLowerLimit=9,
/**  TimestampLowerLimit  */
TimestampLowerLimit=10,
/**  YValueUpperLimit  */
YValueUpperLimit=11,
/**  TimestampUpperLimit  */
TimestampUpperLimit=12,
/**  Minimum  */
Minimum=13,
/**  MinimumTimestamp  */
MinimumTimestamp=14,
/**  Maximum  */
Maximum=15,
/**  MaximumTimestamp  */
MaximumTimestamp=16,
/**  Average  */
Average=17,
/**  StandardDeviation  */
StandardDeviation=18,
/**  Integral  */
Integral=19,
/**  WeightedAverageValue  */
WeightedAverageValue=20,
/**  Duration  */
Duration=21,
/**  NumberOfValues  */
NumberOfValues=22,
/**  AreaName  */
AreaName=23,
/**  AreaNameLL  */
AreaNameLL=24,
/**  AreaNameHL  */
AreaNameHL=25,
/**  Sum  */
Sum=32,}
/**  HmiTrendMode  */declare const enum HmiTrendMode{
/**  Points  */
Points=0,
/**  Interpolated  */
Interpolated=1,
/**  Stepped  */
Stepped=2,
/**  Bar  */
Bar=3,
/**  Value  */
Value=4,}
/**  HmiValueTendency  */declare const enum HmiValueTendency{
/**  Same value as before.  */
Steady=0,
/**  New value is greater than last value.  */
Upwards=1,
/**  New value is below last value.  */
Downwards=2,}
/**  HmiVerticalAlignment  */declare const enum HmiVerticalAlignment{
/**  Top  */
Top=0,
/**  Center  */
Center=1,
/**  Bottom  */
Bottom=2,
/**  Only applicable with layout containers; fallback behaves like Center.  */
Stretch=3,}
/**  HmiVideoOutput  */declare const enum HmiVideoOutput{
/**  Undefined  */
Undefined=0,
/**  The video is scaled to fit.  */
Stretch=1,
/**  The Video is scaled uniformly to fit without cropping.  */
PreserveAspectFit=2,
/**  The Video is scaled uniformly to fill, cropping if necessary.  */
PreserveAspectCrop=3,}
/**  HmiVisibleAlarms  */declare const enum HmiVisibleAlarms{
/**  No alarms are shown.  */
None=0,
/**  Show all alarms that are not suppressed.  */
UnSuppressed=1,
/**  Show alarms that are disabled. Only relevant for AlarmDefinitionViewSetup.  */
Disabled=2,
/**  Show alarms that are suppressed by design.  */
SuppressedByDesign=4,
/**  Show alarms that are shelved.  */
Shelved=8,}
/**  HmiWebControlID  */declare const enum HmiWebControlID{
/**  None  */
None=0,
/**  Operation  */
Home=5,
/**  Operation  */
Reload=6,
/**  Input  */
Address=512,
/**  Output  */
StatusText=277,
/**  Custom, allows configuring also properties that are defined in classes derived from HmiControlBarElementPartBase.  */
Custom=65536,}
/**  HmiWindowFlag  */declare const enum HmiWindowFlag{
/**  None  */
None=0,
/**  Window caption is visible.  */
ShowCaption=1,
/**  Window border is visible.  */
ShowBorder=2,
/**  Window is opened on top of all other windows.  */
AlwaysOnTop=4,
/**  Window is resizable.  */
CanSize=8,
/**  Window movable.  */
CanMove=16,
/**  Window has a 'Maximize' button.  */
CanMaximize=32,
/**  Window has a 'Close' button.  */
CanClose=64,
/**  Window cannot be moved out of the parent (Screen, Faceplate, etc.).  */
AlwaysInParent=128,}
/**  HmiWindowStartupPosition  */declare const enum HmiWindowStartupPosition{
/**  Unspecified, use as configured.  */
None=0,
/**  Centered within the configured monitor.  */
CenteredMonitor=1,
/**  Maximized within the configured monitor.  */
Maximized=2,
/**  Centered within the owner HmiScreen.  */
CenteredOwner=3,}
/**  HmiWindowState  */declare const enum HmiWindowState{
/**  A default sized window.  */
Normal=0,
/**  A maximized window.  */
Maximized=1,}
/**  Used for HMILoggedTagValueResult.Flags in the HMILoggedTag.Read() method.  */declare const enum hmiTagLoggingValueFlags{
/**  More than one piece of data that may be hidden exists at same timestamp.  */
extra=0,
/**  IDH_CALCULATED = 0 means that the value is not calculated and therefore is a raw value as it is stored in the storage system.  */
calculated=2,
/**  Specifies that this value is a bounding value.  */
bounding=16,
/**  There is no data available for the given filter set.  */
noData=32,
/**  This is the very first value available in the storage system.  */
firstStored=64,
/**  This is the very last value stored.  */
lastStored=128,}
/**  Used by the Write() methods of HMITag and HMITagSet.  */declare const enum hmiWriteType{
/**  Writes the value without waiting. The cache and the process image are not already updated when the call returns.  */
hmiWriteNoWait=0,
/**  Writes the value and waits until the value is written in the PLC. The cache and the process value are not already updated when the call returns.  */
hmiWriteWait=1,}
/**  Used by the Read() methods of HMITag and HMITagSet.  */declare const enum hmiReadType{
/**  Reads the value from the cache. When there is no active subscription for the HMITag, a new subscription will be created which makes sure the cache is updated regularly. This subsciption creation will take some time. To avoid this latency time, you should add the needed HMITags to the trigger condition of the script which will make sure that the HMITags are already in the cache.  */
hmiReadCache=0,
/**  Reads the value from the PLC. This will take some time. The cache will not be updated.  */
hmiReadDirect=1,}interface PromiseParameterRejErrorCodeAlarmLogging extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterLoggedAlarmStateResultArray extends Promise<HMILoggedAlarmStateResult>{then<TResult1=HMILoggedAlarmStateResult,TResult2=never>(onfulfilled?:((alarmResultArray:HMILoggedAlarmStateResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMILoggedAlarmStateResult|TResult>;}interface PromiseParameterRejStartStopErrorCodeLogging extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterPage extends Promise<HMILoggedAlarmStatePage>{then<TResult1=HMILoggedAlarmStatePage,TResult2=never>(onfulfilled?:((alarmResultPage:HMILoggedAlarmStatePage)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMILoggedAlarmStatePage|TResult>;}interface PromiseParameterPages extends Promise<HMILoggedAlarmStatePages>{then<TResult1=HMILoggedAlarmStatePages,TResult2=never>(onfulfilled?:((alarmResultPages:HMILoggedAlarmStatePages)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMILoggedAlarmStatePages|TResult>;}interface PromiseParameterPageCount extends Promise<UInt32>{then<TResult1=UInt32,TResult2=never>(onfulfilled?:((pageCount:UInt32)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<UInt32|TResult>;}interface PromiseParameterRejErrorCodeAlarm extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterAlarmResultArray extends Promise<HMIAlarmResult>{then<TResult1=HMIAlarmResult,TResult2=never>(onfulfilled?:((alarmResultArray:HMIAlarmResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMIAlarmResult|TResult>;}interface PromiseParameterInsertElectronicRecord extends Promise<ErrorCode>{then<TResult1=ErrorCode,TResult2=never>(onfulfilled?:((errorCode:ErrorCode)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<ErrorCode|TResult>;}interface PromiseParameterElectronicRecordResult extends Promise<HMIElectronicRecordResult>{then<TResult1=HMIElectronicRecordResult,TResult2=never>(onfulfilled?:((electronicRecordResult:HMIElectronicRecordResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMIElectronicRecordResult|TResult>;}interface PromiseParameterRejStartStopErrorCodeLogging extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterRejErrorCodeConnection extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterDatabaseConnection extends Promise<HMIDatabaseConnection>{then<TResult1=HMIDatabaseConnection,TResult2=never>(onfulfilled?:((DatabaseConnection:HMIDatabaseConnection)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((Result:HMIDatabaseResult)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((Result:HMIDatabaseResult)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMIDatabaseConnection|TResult>;}interface PromiseParameterDatabaseResult extends Promise<HMIDatabaseResult>{then<TResult1=HMIDatabaseResult,TResult2=never>(onfulfilled?:((DatabaseResult:HMIDatabaseResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:HMIDatabaseResult)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:HMIDatabaseResult)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMIDatabaseResult|TResult>;}interface PromiseParameterRejErrorCode extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseReadFile extends Promise<string>{then<TResult1=string,TResult2=never>(onfulfilled?:((data:string)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<string|TResult>;}interface PromiseReadFileBinary extends Promise<Blob>{then<TResult1=Blob,TResult2=never>(onfulfilled?:((data:Blob)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<Blob|TResult>;}interface PromiseFile extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseBrowse extends Promise<string[]>{then<TResult1=string[],TResult2=never>(onfulfilled?:((data:string[])=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<string[]|TResult>;}interface PromiseParameterConnect extends Promise<HMIOpcUAConnectResult>{then<TResult1=HMIOpcUAConnectResult,TResult2=never>(onfulfilled?:((ConnectResult:HMIOpcUAConnectResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMIOpcUAConnectResult|TResult>;}interface PromiseParameterGetMethod extends Promise<HMIOpcUAGetMethodResult>{then<TResult1=HMIOpcUAGetMethodResult,TResult2=never>(onfulfilled?:((GetMethodResult:HMIOpcUAGetMethodResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMIOpcUAGetMethodResult|TResult>;}interface PromiseParameterCall extends Promise<HMIOpcUAMethodCallResult>{then<TResult1=HMIOpcUAMethodCallResult,TResult2=never>(onfulfilled?:((CallResult:HMIOpcUAMethodCallResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMIOpcUAMethodCallResult|TResult>;}interface PromiseParameterRejErrorCode extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterPlantObjectSet extends Promise<HMIPlantObjectPropertySet>{then<TResult1=HMIPlantObjectPropertySet,TResult2=never>(onfulfilled?:((propertySet:HMIPlantObjectPropertySet)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMIPlantObjectPropertySet|TResult>;}interface PromiseParameterAlarmResultArrayPlantObject extends Promise<HMIAlarmResult>{then<TResult1=HMIAlarmResult,TResult2=never>(onfulfilled?:((alarmResultArray:HMIAlarmResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMIAlarmResult|TResult>;}interface PromiseParameterRejErrorCode extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterLoggedTagResult extends Promise<HMILoggedTagResult>{then<TResult1=HMILoggedTagResult,TResult2=never>(onfulfilled?:((loggedTagResult:HMILoggedTagResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMILoggedTagResult|TResult>;}interface PromiseParameterLoggedTagArrayResult extends Promise<HMILoggedTagResult>{then<TResult1=HMILoggedTagResult,TResult2=never>(onfulfilled?:((loggedTagArrayResult:HMILoggedTagResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMILoggedTagResult|TResult>;}interface PromiseParameterRejErrorCodeTagLogging extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterRejStartStopErrorCodeLogging extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterRejErrorCode extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterTagSet extends Promise<HMITagSet>{then<TResult1=HMITagSet,TResult2=never>(onfulfilled?:((tagSet:HMITagSet)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMITagSet|TResult>;}interface PromiseParameterTagValue extends Promise<Variant>{then<TResult1=Variant,TResult2=never>(onfulfilled?:((value:Variant)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<Variant|TResult>;}interface PromiseParameterAlarmBlockResult extends Promise<HMIAlarmBlockResult>{then<TResult1=HMIAlarmBlockResult,TResult2=never>(onfulfilled?:((alarmBlockResult:HMIAlarmBlockResult)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<HMIAlarmBlockResult|TResult>;}interface PromiseParameterRejErrorCode extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}interface PromiseParameterPropertyValue extends Promise<Variant>{then<TResult1=Variant,TResult2=never>(onfulfilled?:((value:Variant)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<Variant|TResult>;}interface PromiseUmcError extends Promise<void>{then<TResult1=void,TResult2=never>(onfulfilled?:(()=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((errorCode:ErrorCode)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((errorCode:ErrorCode)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<void|TResult>;}
/**  The OnAlarm() callback function for the alarm subscription.  */type HMIOnAlarmCB=(errorCode:ErrorCode,systemName:string,alarmResultArray:HMIAlarmResult)=>void;
/**  The callback function for the tag subscription.  */type HMIOnTagCB=(tagResult:HMITagResult)=>void;
/**  The callback function for HMITimer.SetInterval() and HMITimer.SetTimeout().  */type HMIOnTimerCB=()=>void;
/**  This type is an alias for HmiAlarmControl.  */type ALARMCONTROL<ScreenItemName>=HmiAlarmControl<ScreenItemName>;
/**  This type is an alias for HmiBar.  */type BAR<ScreenItemName>=HmiBar<ScreenItemName>;
/**  This type is an alias for HmiButton.  */type BUTTON<ScreenItemName>=HmiButton<ScreenItemName>;
/**  This type is an alias for HmiCheckBoxGroup.  */type CHECKBOXGROUP<ScreenItemName>=HmiCheckBoxGroup<ScreenItemName>;
/**  This type is an alias for HmiCircle.  */type CIRCLE<ScreenItemName>=HmiCircle<ScreenItemName>;
/**  This type is an alias for HmiCircleSegment.  */type CIRCLESEGMENT<ScreenItemName>=HmiCircleSegment<ScreenItemName>;
/**  This type is an alias for HmiCircularArc.  */type CIRCULARARC<ScreenItemName>=HmiCircularArc<ScreenItemName>;
/**  This type is an alias for HmiClock.  */type CLOCK<ScreenItemName>=HmiClock<ScreenItemName>;
/**  This type is an alias for HmiComboBox.  */type COMBOBOX<ScreenItemName>=HmiComboBox<ScreenItemName>;
/**  This type is an alias for HmiCustomWebControlContainer.  */type CUSTOMWEBCONTROLCONTAINER<ScreenItemName>=HmiCustomWebControlContainer<ScreenItemName>;
/**  This type is an alias for HmiCustomWidgetContainer.  */type CUSTOMWIDGETCONTAINER<ScreenItemName>=HmiCustomWidgetContainer<ScreenItemName>;
/**  This type is an alias for HmiDataGridControl.  */type DATAGRIDCONTROL<ScreenItemName>=HmiDataGridControl<ScreenItemName>;
/**  This type is an alias for HmiDcsFaceplateContainer.  */type DCSFACEPLATECONTAINER<ScreenItemName>=HmiDcsFaceplateContainer<ScreenItemName>;
/**  This type is an alias for HmiDetailedParameterControl.  */type DETAILEDPARAMETERCONTROL<ScreenItemName>=HmiDetailedParameterControl<ScreenItemName>;
/**  This type is an alias for HmiDotNetControlContainer.  */type DOTNETCONTROLCONTAINER<ScreenItemName>=HmiDotNetControlContainer<ScreenItemName>;
/**  This type is an alias for HmiEllipse.  */type ELLIPSE<ScreenItemName>=HmiEllipse<ScreenItemName>;
/**  This type is an alias for HmiEllipseSegment.  */type ELLIPSESEGMENT<ScreenItemName>=HmiEllipseSegment<ScreenItemName>;
/**  This type is an alias for HmiEllipticalArc.  */type ELLIPTICALARC<ScreenItemName>=HmiEllipticalArc<ScreenItemName>;
/**  This type is an alias for HmiFaceplateContainer.  */type FACEPLATECONTAINER<ScreenItemName>=HmiFaceplateContainer<ScreenItemName>;
/**  This type is an alias for HmiFunctionTrendControl.  */type FUNCTIONTRENDCONTROL<ScreenItemName>=HmiFunctionTrendControl<ScreenItemName>;
/**  This type is an alias for HmiGauge.  */type GAUGE<ScreenItemName>=HmiGauge<ScreenItemName>;
/**  This type is an alias for HmiGraphicView.  */type GRAPHICVIEW<ScreenItemName>=HmiGraphicView<ScreenItemName>;
/**  This type is an alias for HmiGroup.  */type GROUP<ScreenItemName>=HmiGroup<ScreenItemName>;
/**  This type is an alias for HmiIOField.  */type IOFIELD<ScreenItemName>=HmiIOField<ScreenItemName>;
/**  This type is an alias for HmiLabel.  */type LABEL<ScreenItemName>=HmiLabel<ScreenItemName>;
/**  This type is an alias for HmiLine.  */type LINE<ScreenItemName>=HmiLine<ScreenItemName>;
/**  This type is an alias for HmiListBox.  */type LISTBOX<ScreenItemName>=HmiListBox<ScreenItemName>;
/**  This type is an alias for HmiMediaControl.  */type MEDIACONTROL<ScreenItemName>=HmiMediaControl<ScreenItemName>;
/**  This type is an alias for HmiObjectExplorerControl.  */type OBJECTEXPLORERCONTROL<ScreenItemName>=HmiObjectExplorerControl<ScreenItemName>;
/**  This type is an alias for HmiOverviewParameterControl.  */type OVERVIEWPARAMETERCONTROL<ScreenItemName>=HmiOverviewParameterControl<ScreenItemName>;
/**  This type is an alias for HmiPolygon.  */type POLYGON<ScreenItemName>=HmiPolygon<ScreenItemName>;
/**  This type is an alias for HmiPolyline.  */type POLYLINE<ScreenItemName>=HmiPolyline<ScreenItemName>;
/**  This type is an alias for HmiPopupScreenWindow.  */type POPUPSCREENWINDOW<ScreenItemName>=HmiPopupScreenWindow<ScreenItemName>;
/**  This type is an alias for HmiProcessControl.  */type PROCESSCONTROL<ScreenItemName>=HmiProcessControl<ScreenItemName>;
/**  This type is an alias for HmiProcessDiagnosisCriteriaAnalysisControl.  */type PROCESSDIAGNOSISCRITERIAANALYSISCONTROL<ScreenItemName>=HmiProcessDiagnosisCriteriaAnalysisControl<ScreenItemName>;
/**  This type is an alias for HmiProcessDiagnosisGraphOverviewControl.  */type PROCESSDIAGNOSISGRAPHOVERVIEWCONTROL<ScreenItemName>=HmiProcessDiagnosisGraphOverviewControl<ScreenItemName>;
/**  This type is an alias for HmiProcessDiagnosisOverviewControl.  */type PROCESSDIAGNOSISOVERVIEWCONTROL<ScreenItemName>=HmiProcessDiagnosisOverviewControl<ScreenItemName>;
/**  This type is an alias for HmiProcessDiagnosisPlcCodeViewerControl.  */type PROCESSDIAGNOSISPLCCODEVIEWERCONTROL<ScreenItemName>=HmiProcessDiagnosisPlcCodeViewerControl<ScreenItemName>;
/**  This type is an alias for HmiRadioButtonGroup.  */type RADIOBUTTONGROUP<ScreenItemName>=HmiRadioButtonGroup<ScreenItemName>;
/**  This type is an alias for HmiRectangle.  */type RECTANGLE<ScreenItemName>=HmiRectangle<ScreenItemName>;
/**  This type is an alias for HmiScreenWindow.  */type SCREENWINDOW<ScreenItemName>=HmiScreenWindow<ScreenItemName>;
/**  This type is an alias for HmiSlider.  */type SLIDER<ScreenItemName>=HmiSlider<ScreenItemName>;
/**  This type is an alias for HmiSwacContainer.  */type SWACCONTAINER<ScreenItemName>=HmiSwacContainer<ScreenItemName>;
/**  This type is an alias for HmiSymbolContainer.  */type SYMBOLCONTAINER<ScreenItemName>=HmiSymbolContainer<ScreenItemName>;
/**  This type is an alias for HmiSymbolicIOField.  */type SYMBOLICIOFIELD<ScreenItemName>=HmiSymbolicIOField<ScreenItemName>;
/**  This type is an alias for HmiSystemDiagnosisControl.  */type SYSTEMDIAGNOSISCONTROL<ScreenItemName>=HmiSystemDiagnosisControl<ScreenItemName>;
/**  This type is an alias for HmiText.  */type TEXT<ScreenItemName>=HmiText<ScreenItemName>;
/**  This type is an alias for HmiTextBox.  */type TEXTBOX<ScreenItemName>=HmiTextBox<ScreenItemName>;
/**  This type is an alias for HmiToggleSwitch.  */type TOGGLESWITCH<ScreenItemName>=HmiToggleSwitch<ScreenItemName>;
/**  This type is an alias for HmiTopLevelScreenWindow.  */type TOPLEVELSCREENWINDOW<ScreenItemName>=HmiTopLevelScreenWindow<ScreenItemName>;
/**  This type is an alias for HmiTouchArea.  */type TOUCHAREA<ScreenItemName>=HmiTouchArea<ScreenItemName>;
/**  This type is an alias for HmiTrendCompanion.  */type TRENDCOMPANION<ScreenItemName>=HmiTrendCompanion<ScreenItemName>;
/**  This type is an alias for HmiTrendControl.  */type TRENDCONTROL<ScreenItemName>=HmiTrendControl<ScreenItemName>;
/**  This type is an alias for HmiWebControl.  */type WEBCONTROL<ScreenItemName>=HmiWebControl<ScreenItemName>;type DTNone=never;type DTStruct=never;
/**  An array with DTStruct values.  */type DTDynStructArray=never[];type DTStructRef=never;
/**  An array with DTStructRef values.  */type DTDynStructRefArray=never[];type DTEnum=never;
/**  An array with DTEnum values.  */type DTDynEnumArray=never[];type DTArray=never;type DTVariant=never;
/**  An array with DTVariant values.  */type DTDynVariantArray=never[];
/**  IOWA internal datapoint identifier.  */type DTDpIdent=string;
/**  An array with DTDpIdent values.  */type DTDpIdentArray=string[];
/**  Variable-length character string, UTF-8 [RFC-3629] encoding of ISO-10646. The maximum string length is either system defined (product and/or HMI device specific), or configured in the Engineering System for HmiTags of data type String.  */type DTString=string;
/**  Multilingual string, variable number of languages, defined as: Array of Struct { UDInt language; String text } The maximum string length is system defined (product and/or HMI device specific). This is valid also for HmiTags of data type LString.  */type DTLString=string;
/**  Variable-length character, UTF-8 [RFC-3629] encoding of ISO-10646.  */type DTChar=string;
/**  An array with DTString values.  */type DTDynStringArray=string[];
/**  An array with DTLString values.  */type DTDynLStringArray=string[];
/**  An array with DTChar values.  */type DTDynCharArray=string[];
/**  Variable-length byte string. The maximum raw size is either system defined (product and/or HMI device specific), or configured in the Engineering System for HmiTags of data type Raw.  */type DTRaw=ArrayBuffer;
/**  An array with DTRaw values.  */type DTDynRawArray=ArrayBuffer[];
/**  Short Integer: 8 Bit Signed Integer. Range: -128 to 127  */type DTSInt=Int8;
/**  Integer: 16 Bit Signed Integer. Range: -32768 to 32767  */type DTInt=Int16;
/**  Double Integer: 32 Bit Signed Integer. Range: -2147483648 to 2147483647  */type DTDInt=Int32;
/**  Long Integer: 64 Bit Signed Integer. Range: -9223372036854775808 to 9223372036854775807  */type DTLInt=Int64;
/**  Unsigned Short Integer: 8 Bit Unsigned Integer. Range: 0 to 255  */type DTUSInt=UInt8;
/**  Unsigned Integer: 16 Bit Unsigned Integer. Range: 0 to 65535  */type DTUInt=UInt16;
/**  Unsigned Double Integer: 32 Bit Unsigned Integer. Range: 0 to 4294967295  */type DTUDInt=UInt32;
/**  Unsigned Long Integer: 64 Bit Unsigned Integer. Range: 0 to 18446744073709551615  */type DTULInt=UInt64;
/**  An array with DTInt values.  */type DTDynIntArray=Int16[];
/**  An array with DTDInt values.  */type DTDynDIntArray=Int32[];
/**  An array with DTLInt values.  */type DTDynLIntArray=Int64[];
/**  An array with DTSInt values.  */type DTDynSIntArray=Int8[];
/**  An array with DTUInt values.  */type DTDynUIntArray=UInt16[];
/**  An array with DTUDInt values.  */type DTDynUDIntArray=UInt32[];
/**  An array with DTULInt values.  */type DTDynULIntArray=UInt64[];
/**  An array with DTUSInt values.  */type DTDynUSIntArray=UInt8[];
/**  Universally Unique Identifier of objects according to RFC 4122. Example: 0102EB09-064A-47BB-B363-C44523EEED06  */type DTUUID=string;
/**  An array with DTUUID values.  */type DTDynUUIDArray=string[];
/**  16 Bit bitset as Unsigned Integer.  */type DTWord=UInt16;
/**  32 Bit bitset as Unsigned Integer.  */type DTDWord=UInt32;
/**  64 Bit bitset as Unsigned Integer.  */type DTLWord=UInt64;
/**  An array with DTWord values.  */type DTDynWordArray=UInt16[];
/**  An array with DTDWord values.  */type DTDynDWordArray=UInt32[];
/**  An array with DTLWord values.  */type DTDynLWordArray=UInt64[];
/**  Bit string of length 8. Range: 0 to 11111111  */type DTByte=string;
/**  An array with DTByte values.  */type DTDynByteArray=string[];
/**  64 Bit Signed Integer which represents the number of 100 nanosecond intervals since January 1, 1601 (UTC). DateTime conforms to Windows FILETIME and OPC UA data type “DateTime”.  */type DTDateTime=Int64;
/**  64 Bit Signed Integer which represents a duration in 100 nanosecond intervals. It must be given as ISO 8601 time span string: [-]PdDThHmMs.fS. All parts are optional but at least one part must be given. The 'T' separator is only necessary when using hours, minutes and / or seconds. Hours must not be bigger than 23. Minutes and seconds must not be bigger than 59. Fractional seconds can have up to 7 decimal places.  */type DTLTime=Int64;
/**  An array with DTDateTime values.  */type DTDynDateTimeArray=Int64[];
/**  An array with DTLTime values.  */type DTDynLTimeArray=Int64[];
/**  Boolean: true or false  */type DTBool=boolean;
/**  An array with DTBool values.  */type DTDynBoolArray=boolean[];
/**  Real number: 32 Bit Single Precision Floating Point. Range: -3.4028235E+38 to 3.4028235E+38  */type DTReal=Float;
/**  Long real number: 64 Bit Double Precision Floating Point. Range: -1.7976931348623157E+308 to 1.7976931348623157E+308  */type DTLReal=Double;
/**  An array with DTReal values.  */type DTDynRealArray=Float[];
/**  An array with DTLReal values.  */type DTDynLRealArray=Double[];
/**  Pair of two 32 Bit Signed Integer values (X, Y) as a 64 Bit Integer value, with X shifted to the higher bits.  */type DTPoint=UInt64;
/**  An array with DTPoint values.  */type DTPointArray=UInt64[];
/**  32 Bit Unsigned Integer representing a color value as ARGB  */type DTColor=UInt32;
/**  An array with DTColor values.  */type DTDynColorArray=UInt32[];
/**  CHROM Identifier as named reference string with optional ID as ReferenceIdentifier.  */type DTRef=string;
/**  CHROM Identifier as named reference string with optional ID as ReferenceIdentifier.  */type DTSRef=string;
/**  Global CHROM Identifier as named reference string.  */type DTURef=string;
/**  Screen Object Model reference as named reference string.  */type DTSomRef=string;
/**  An array with DTRef values.  */type DTRefArray=string[];
/**  An array with DTURef values.  */type DTDynURefArray=string[];
/**  An array with DTSomRef values.  */type DTDynSomRefArray=string[];
/** * Object model HMIGetAndClearValueCommandBase. */interface HMIGetAndClearValueCommandBase{}
/** * Object model HMIRuntime.AlarmLogging.Enums. */interface HMIModificationTimeOrderEnums{readonly hmiModificationTimeOrder:typeof hmiModificationTimeOrder;}
/** * Object model LoggedAlarmStateResult. */interface HMILoggedAlarmStateResult{
/** * Instance ID of Alarm. */readonly InstanceID:UInt32;
/** * Name of the alarm class. */readonly AlarmClassName:string;
/** * Symbol of the alarm class. */readonly AlarmClassSymbol:string;
/** * State of the alarm. */readonly State:UInt32;
/** * Text for the state of alarm. */readonly StateText:string;
/** * Color for the text of alarm. */readonly TextColor:UInt32;
/** * Back Color for the alarm text. */readonly BackColor:UInt32;
/** * Time of alarm modified. */readonly ModificationTime:DateTime;
/** * Reason for change in alarm state. */readonly ChangeReason:UInt16;
/** * Time when alarm was raised. */readonly RaiseTime:DateTime;
/** * Time of alarm acknowledgement. */readonly AcknowledgementTime:DateTime;
/** * Time of clearing alarm. */readonly ClearTime:DateTime;
/** * Time of resetting alarm. */readonly ResetTime:DateTime;
/** * State of whether alarm is suppressed from viewing or not. */readonly SuppressionState:UInt8;
/** * Priority of alarm. */readonly Priority:UInt8;
/** * Text for the alarm event. */readonly EventText:string;
/** * Text for the alarm. */readonly AlarmText:string[];
/** * Values of alarm parameter for the maximum count of parameters set. */readonly AlarmParameterValues:Variant[];
/** * Flag for valid/invalid state of alarm. */readonly InvalidFlags:UInt8;
/** * Origin of Alarm. */readonly Origin:string;
/** * Area of the generated alarm. */readonly Area:string;
/** * Value for alarm. */readonly Value:Variant;
/** * Quality of generated alarm value. */readonly ValueQuality:UInt16;
/** * Limit of alarm value. */readonly ValueLimit:Variant;
/** * Connection name for which alarm is generated. */readonly Connection:string;
/** * User name in case of operator input alarms. */readonly UserName:string;
/** * Indicates the expected user response for generated alarm. */readonly UserResponse:UInt16;
/** * The dead band of the trigger tag. */readonly Deadband:Variant;
/** * Name of the machine that hosts the originator of the alarm. */readonly HostName:boolean;readonly ID:UInt32;readonly InfoText:string;readonly SourceType:UInt16;readonly StateMachine:UInt8;readonly SingleAcknowledgement:boolean;readonly LoggedAlarmStateObjectID:string;
/** * Alarm Group ID for PLC Alarm. */readonly AlarmGroupID:UInt8;
/** * Duration of Alarm. */readonly Duration:Time;}
/** * Object model HMIRuntime.AlarmLogging.SysFct. */interface HMIAlarmLoggingSysFct{
/** * Removes all the records from the specified Alarm Logging Archive. * @param LogName Specifies the name of the archive to which the records shall be removed. * @returns PromiseParameterRejErrorCodeAlarmLogging */
ClearAlarmLog(LogName:string):PromiseParameterRejErrorCodeAlarmLogging;
/** * Starts archieving for the specified alarm Log. * @param LogName Specifies the name of the alarm log to which Logging has to be started. * @returns PromiseParameterRejStartStopErrorCodeLogging */
StartAlarmLog(LogName?:string):PromiseParameterRejStartStopErrorCodeLogging;
/** * Stops archieving for the specified alarm Log. * @param LogName Specifies the name of the alarm log to which Logging has to be stop. * @returns PromiseParameterRejStartStopErrorCodeLogging */
StopAlarmLog(LogName?:string):PromiseParameterRejStartStopErrorCodeLogging;}
/** * Object model LoggedAlarmStatePage. */interface HMILoggedAlarmStatePage{
/** * Current page number. */readonly PageNumber:UInt32;
/** * True if the current page is the last page. */readonly IsLastPage:boolean;
/** * True if the current page is the first page. */readonly IsFirstPage:boolean;
/** * Attributes of the alarms of a page. */readonly LoggedAlarms:HMILoggedAlarmStateResult;
/** * Returns the next page or an error, if it does not exist. * @returns PromiseParameterPage */
Next():PromiseParameterPage;
/** * Returns the previous page or an error, if it does not exist. * @returns PromiseParameterPage */
Prev():PromiseParameterPage;}
/** * Object model LoggedAlarmStatePages. */interface HMILoggedAlarmStatePages{
/** * Returns the number of pages available for paging. * @returns PromiseParameterPageCount */
GetPageCount():PromiseParameterPageCount;
/** * Returns the number of pages which matched the filter critera. * @returns PromiseParameterPageCount */
GetTotalPageCount():PromiseParameterPageCount;
/** * Returns the alarms of the first page. * @returns PromiseParameterPage */
GetFirstPage():PromiseParameterPage;
/** * Returns the alarms of the last page. * @returns PromiseParameterPage */
GetLastPage():PromiseParameterPage;
/** * Explicitly frees the alarm data of the pages. Further paging operations are on longer possible. * 				. * @returns PromiseParameterRejErrorCodeAlarmLogging */
Dispose():PromiseParameterRejErrorCodeAlarmLogging;}
/** * Object model HMIRuntime.AlarmLogging. */interface HMIAlarmLogging{
/** * Contains a list of all logged attributes of an alarm. */readonly AllAttributes:string[];
/** * Read logged alarms from the AlarmLog. * @param dateFrom Specifies the end of the time range. * @param dateTo Specifies the beginning of the time range. * @param filter * @param language  The language for all texts and also for the filter setting. * @param systemNames Array of system names. * @returns PromiseParameterLoggedAlarmStateResultArray */
Read(dateFrom:DateTime,dateTo:DateTime,filter:string,language:UInt32,systemNames?:string[]):PromiseParameterLoggedAlarmStateResultArray;
/** * Add a comment for a HmiLoggedAlarmState. LoggedAlarmStateObjectID, InstanceID and TimeStamp have to be taken from a HMILoggedAlarmStateResult. * @param LoggedAlarmStateObjectID * @param InstanceID * @param TimeStamp * @param Language * @param Comment * @returns PromiseParameterRejErrorCodeAlarmLogging */
AddComment(LoggedAlarmStateObjectID:string,InstanceID:UInt32,TimeStamp:DateTime,Language:UInt32,Comment:string):PromiseParameterRejErrorCodeAlarmLogging;
/** * Read logged alarms from the AlarmLog. * @param dateFrom Specifies the end of the time range. * @param dateTo Specifies the beginning of the time range. * @param filter * @param language  The language for all texts and also for the filter setting. * @param pageSize The size of one page. * @param systemNames Array of system names. * @param modificationTimeOrder The order of the alarms. * @param attributes The attributes to include in the alarm result. * @returns PromiseParameterPages */
ReadPages(dateFrom:DateTime,dateTo:DateTime,filter:string,language:UInt32,pageSize:UInt32,systemNames?:string[],modificationTimeOrder?:hmiModificationTimeOrder,attributes?:string[]):PromiseParameterPages;readonly Enums:HMIModificationTimeOrderEnums;readonly SysFct:HMIAlarmLoggingSysFct;}
/** * Object model HMIRuntime.Alarming.SysFct. */interface HMIAlarmingSysFct{
/** * Creates an operator input notification in the AlarmLog. * @param AlarmText * @param Area * @param AlarmParameterValue1 * @param AlarmParameterValue2 * @param AlarmParameterValue3 * @param AlarmParameterValue4 * @param AlarmParameterValue5 * @param AlarmParameterValue6 * @param AlarmParameterValue7 * @returns ErrorCode */
CreateOperatorInputInformation(AlarmText:string,Area?:string,AlarmParameterValue1?:Variant,AlarmParameterValue2?:Variant,AlarmParameterValue3?:Variant,AlarmParameterValue4?:Variant,AlarmParameterValue5?:Variant,AlarmParameterValue6?:Variant,AlarmParameterValue7?:Variant):ErrorCode;
/** * Creates a SystemAlarm which requires acknowledgement. * @param AlarmText * @param Area * @param AlarmParameterValue1 * @param AlarmParameterValue2 * @param AlarmParameterValue3 * @param AlarmParameterValue4 * @param AlarmParameterValue5 * @param AlarmParameterValue6 * @param AlarmParameterValue7 * @returns ErrorCode */
CreateSystemAlarm(AlarmText:string,Area?:string,AlarmParameterValue1?:Variant,AlarmParameterValue2?:Variant,AlarmParameterValue3?:Variant,AlarmParameterValue4?:Variant,AlarmParameterValue5?:Variant,AlarmParameterValue6?:Variant,AlarmParameterValue7?:Variant):ErrorCode;
/** * Creates a SystemInformation in the AlarmLog. * @param AlarmText The alarm text. * @param Area Area specifier. * @param AlarmParameterValue1 1st alarm parameter. * @param AlarmParameterValue2 2nd alarm parameter. * @param AlarmParameterValue3 3rd alarm parameter. * @param AlarmParameterValue4 4th alarm parameter. * @param AlarmParameterValue5 5th alarm parameter. * @param AlarmParameterValue6 6th alarm parameter. * @param AlarmParameterValue7 7th alarm parameter. * @returns ErrorCode */
CreateSystemInformation(AlarmText:string,Area?:string,AlarmParameterValue1?:Variant,AlarmParameterValue2?:Variant,AlarmParameterValue3?:Variant,AlarmParameterValue4?:Variant,AlarmParameterValue5?:Variant,AlarmParameterValue6?:Variant,AlarmParameterValue7?:Variant):ErrorCode;}
/** * Object model AlarmResult. */interface HMIAlarmResult{
/** * Instance ID of Alarm. */readonly InstanceID:UInt32;
/** * Source ID of Alarm. */readonly SourceID:string;
/** * Name of the alarm. */readonly Name:AlarmName;
/** * Name of the alarm class. */readonly AlarmClassName:string;
/** * Symbol of the alarm class. */readonly AlarmClassSymbol:string;
/** * State of the alarm. */readonly State:UInt32;
/** * Text for the state of alarm. */readonly StateText:string;
/** * Color for the text of alarm. */readonly TextColor:UInt32;
/** * Back Color for the alarm text. */readonly BackColor:UInt32;
/** *  Property to enable/disable flashing. */readonly Flashing:boolean;
/** * Time of alarm modified. */readonly ModificationTime:DateTime;
/** * Reason for change in alarm state. */readonly ChangeReason:UInt16;
/** * Time when alarm was raised. */readonly RaiseTime:DateTime;
/** * Time of alarm acknowledgement. */readonly AcknowledgementTime:DateTime;
/** * Time of clearing alarm. */readonly ClearTime:DateTime;
/** * Time of resetting alarm. */readonly ResetTime:DateTime;
/** * State of whether alarm is suppressed from viewing or not. */readonly SuppressionState:UInt8;
/** * Priority of alarm. */readonly Priority:UInt8;
/** * Text for the alarm event. */readonly EventText:string;
/** * Text for the alarm. */readonly AlarmText:string[];
/** * Values of alarm parameter for the maximum count of parameters set. */readonly AlarmParameterValues:Variant[];
/** * Flag for valid/invalid state of alarm. */readonly InvalidFlags:UInt8;
/** * Origin of Alarm. */readonly Origin:string;
/** * Area of the generated alarm. */readonly Area:string;
/** * Value for alarm. */readonly Value:Variant;
/** * Quality of generated alarm value. */readonly ValueQuality:UInt16;
/** * Limit of alarm value. */readonly ValueLimit:Variant;
/** * Connection name for which alarm is generated. */readonly Connection:string;
/** * Severity of alarm. */readonly SystemSeverity:UInt16;
/** * User name in case of operator input alarms. */readonly UserName:string;
/** * Indicates the expected user response for generated alarm. */readonly UserResponse:UInt16;
/** * The "Loop In Alarm" function is used to visualize a measuring point which triggered an alarm in a loop display on the faceplate, or as process picture that has been linked in the Component List Editor. */readonly LoopInAlarm:string;
/** * List arguments (parameter values) to the loop-in-alarm function, e.g. reference to the Screen for function OpenScreen. */readonly LoopInAlarmParameterValues:Variant[];
/** * The reason code why this entry was notified. */readonly NotificationReason:UInt8;
/** * Alarm Group ID for PLC Alarm. */readonly AlarmGroupID:UInt8;
/** * Specific alarm number to identify alarm. */readonly ID:UInt32;
/** * Duration of alarm. */readonly Duration:Time;}
/** * Object model Alarm. */interface HMIAlarm{
/** * Name of alarm. */
Name:AlarmName;
/** * Error code returned by called function. */
ErrorCode:ErrorCode;
/** * Enables single alarm. * @returns ErrorCode */
Enable():ErrorCode;
/** * Disable single alarm. * @returns ErrorCode */
Disable():ErrorCode;
/** * To hide Alarm temporarily at runtime by shelving it. * @returns ErrorCode */
Shelve():ErrorCode;
/** * To Unhide alarm at runtime by unshelving it. * @returns ErrorCode */
Unshelve():ErrorCode;
/** * To acknowledge alarm. * @param InstanceID This is the  InstanceID of the Alarm to be acknowledged. * @returns ErrorCode */
Acknowledge(InstanceID?:UInt32):ErrorCode;
/** * To reset the alarm. * @param InstanceID This is the  InstanceID of the Alarm to be acknowledged. * @returns ErrorCode */
Reset(InstanceID?:UInt32):ErrorCode;readonly SysFct:HMIUIAlarmSysFct;}
/** * Object model AlarmSet. */interface HMIAlarmSet{
/** * Count of alarms in alarm set. */readonly Count:UInt32;
/** * Accesses an HMIAlarm object within the AlarmSet. * @param name AlarmName or index (1..n). * @param InstanceID Alarm InstanceID. * @returns HMIAlarm */(name:AlarmName|Int32,InstanceID?:UInt32):HMIAlarm;
/** * Accesses an HMIAlarm object within the AlarmSet. * @param name AlarmName or index (1..n). * @param InstanceID Alarm InstanceID. * @returns HMIAlarm */
Item(name:AlarmName|Int32,InstanceID?:UInt32):HMIAlarm;
/** * To add alarm name(s) in alarm set. * @param AlarmName This is either the name of a Alarm or an array of alarm names . * @param InstanceID Alarm InstanceID. * @returns HMIAlarm[] */
Add(AlarmName:AlarmName|AlarmName[]|[AlarmName,UInt32][],InstanceID?:UInt32):HMIAlarm[];
/** * Removes alarm(s) from alarm set. * @param AlarmName Name of alarm(s) to be removed from collection. * @param InstanceID Alarm InstanceID. * @returns ErrorCode */
Remove(AlarmName:AlarmName|AlarmName[],InstanceID?:UInt32):ErrorCode;
/** * Enables group of alarms. * @returns PromiseParameterRejErrorCodeAlarm */
Enable():PromiseParameterRejErrorCodeAlarm;
/** * Disables group of alarms. * @returns PromiseParameterRejErrorCodeAlarm */
Disable():PromiseParameterRejErrorCodeAlarm;
/** * To hide all alarms of AlarmSet temporarily at runtime by shelving it. * @returns PromiseParameterRejErrorCodeAlarm */
Shelve():PromiseParameterRejErrorCodeAlarm;
/** * To unshelve all alarms of AlarmSet . * @returns PromiseParameterRejErrorCodeAlarm */
Unshelve():PromiseParameterRejErrorCodeAlarm;
/** * To acknowledge all alarms of Alarmset. * @returns PromiseParameterRejErrorCodeAlarm */
Acknowledge():PromiseParameterRejErrorCodeAlarm;
/** * To reset all alarms of AlarmSet. * @returns PromiseParameterRejErrorCodeAlarm */
Reset():PromiseParameterRejErrorCodeAlarm;}
/** * Object model AlarmSubscription. */interface HMIAlarmSubscription{
/** * Filter for subscription. */
Filter:string;
/** *  The language for all texts and also for the filter setting. */
Language:UInt32;
/** * Array of system names. */
SystemNames:string[];
/** * Callback function that is invoked to provide the alarm attributes through the AlarmResult array. * This property is write-only. */set OnAlarm(value:HMIOnAlarmCB);
/** * To subscribe active alarms in scripting according to filter criteria given. * @returns ErrorCode */
Start():ErrorCode;
/** * To cancel subscription for alarms. * @returns ErrorCode */
Stop():ErrorCode;}
/** * Object model HMIRuntime.Alarming. */interface HMIAlarming{
/** * To create AlarmSet/Group of alarms. * @param AlarmNames Names for alarms that needs to be available in the alarmset collection. * @returns HMIAlarmSet */
CreateAlarmSet(AlarmNames?:AlarmName|AlarmName[]|[AlarmName,UInt32][]):HMIAlarmSet;
/** * To create subscription for alarm. * @returns HMIAlarmSubscription */
CreateSubscription():HMIAlarmSubscription;
/** * To get alarm object. * @param AlarmName Name of the Alarm. * @returns HMIAlarm */
Alarms(AlarmName:AlarmName):HMIAlarm;
/** * To get Active alarms without starting and stopping subscription in script. * @param Language * @param Filter Filter for subscription. * @param SystemNames Array of system names. * @returns PromiseParameterAlarmResultArray */
GetActiveAlarms(Language:UInt32,Filter?:string,SystemNames?:string[]):PromiseParameterAlarmResultArray;readonly SysFct:HMIAlarmingSysFct;}
/** * Object model HMIRuntime.Audit.SysFct. */interface HMIAuditSysFct{
/** * Stores an electronic record into the Audit Trail. * @param ObjectName Name of the modified object. * @param Category Category to classify the origin of the change. * @param OperationType Type of change done in the object. * @param OldValue Previous value of the modified object. * @param NewValue New value for the modified object. * @param ConfirmationType Type of confirmation required for the change. * @param Reason Text list offered to simplify the selection of reasons. * @param RequiredFunctionRights Required functtion rights for electronic signature. * @returns PromiseParameterInsertElectronicRecord */
InsertElectronicRecord(ObjectName:string,Category:string,OperationType:hmiOperationType,OldValue:Variant,NewValue:Variant,ConfirmationType:hmiConfirmationType,Reason?:string,RequiredFunctionRights?:hmiAuditRequiredRightsType):PromiseParameterInsertElectronicRecord;
/** * Reads the Audit Electronic Records. * @param dateFrom Specifies the beginning of the time range. * @param dateTo Specifies the end of the time range. * @param offSet The page number of the results. User together with More flag. * @returns PromiseParameterElectronicRecordResult */
ReadElectronicRecord(dateFrom:DateTime,dateTo:DateTime,offSet:UInt32):PromiseParameterElectronicRecordResult;
/** * Starts archieving for the specified Audit Log. * @param LogName Specifies the name of the Audit log to which Logging has to be started. * @returns PromiseParameterRejStartStopErrorCodeLogging */
StartAuditLog(LogName?:string):PromiseParameterRejStartStopErrorCodeLogging;
/** * Stops archieving for the specified audit Log. * @param LogName Specifies the name of the audit log to which Logging has to be stop. * @returns PromiseParameterRejStartStopErrorCodeLogging */
StopAuditLog(LogName?:string):PromiseParameterRejStartStopErrorCodeLogging;}
/** * Object model HMIRuntime.Audit.Enums. */interface HMIAuditEnums{readonly hmiConfirmationType:typeof hmiConfirmationType;readonly hmiOperationType:typeof hmiOperationType;readonly hmiAuditRequiredRightsType:typeof hmiAuditRequiredRightsType;}
/** * Object model HMIRuntime.Audit. */interface HMIAudit{readonly SysFct:HMIAuditSysFct;readonly Enums:HMIAuditEnums;}
/** * Object model ElectronicRecordResult. */interface HMIElectronicRecordResult{
/** * True if the returned page is not the last one. */
More:boolean;
/** * The values of the query. */
Values:HMIElectronicRecordValueResult;
/** * The invalid values of the query. */
InvalidValues:HMIElectronicRecordValueResult;}
/** * Object model ElectronicRecordValueResult. */interface HMIElectronicRecordValueResult{
/** * TimeStamp of the HMIElectronicRecordResult. */
TimeStamp:DateTime;
/** * AuditProviderType of the HMIElectronicRecordResult. */
AuditProviderType:UInt16;
/** * AuditProvider of the HMIElectronicRecordResult. */
AuditProvider:string;
/** * ObjectReference of the HMIElectronicRecordResult. */
ObjectReference:Variant;
/** * ObjectName of the HMIElectronicRecordResult. */
ObjectName:Variant;
/** * OperationType of the HMIElectronicRecordResult. */
OperationType:hmiOperationType;
/** * OperatorStation of the HMIElectronicRecordResult. */
OperatorStation:string;
/** * User of the HMIElectronicRecordResult. */
User:string;
/** * OldValue of the HMIElectronicRecordResult. */
OldValue:Variant;
/** * NewValue of the HMIElectronicRecordResult. */
NewValue:Variant;
/** * Reason of the HMIElectronicRecordResult. */
Reason:Variant;
/** * Language of the HMIElectronicRecordResult. */
Language:UInt32;
/** * Signature of the HMIElectronicRecordResult. */
Signature:Variant;
/** * Signature of the HMIElectronicRecordResult. */
Integrity:UInt16;}
/** * Object model HMIRuntime.Connections.Enums. */interface HMIConnectionsEnums{readonly hmiConnectionMode:typeof hmiConnectionMode;}
/** * Object model HMIRuntime.Connections.SysFct. */interface HMIConnectionsSysFct{
/** * Connects or disconnects a given connection. * @param ConnectionName Name of the HMIConnection. * @param EnableState False = Disable connection, true = Enable connection. * @returns ErrorCode */
SetConnectionMode(ConnectionName:ConnectionName,EnableState:boolean):ErrorCode;
/** * Change address parameters for a given S7 connection. * @param ConnectionName Name of the HMIConnection. * @param IPv4Address A valid IP v4 address (e.g. 192.168.154.128) for the S7 driver. * @param Slot Slot value for the S7 driver. * @param Rack Rack value for the S7 driver. * @returns ErrorCode */
ChangeConnection(ConnectionName:ConnectionName,IPv4Address:string,Slot?:UInt8,Rack?:UInt8):ErrorCode;
/** * Transfer the date and time of the HMI device to the S7+ PLC (S7-1200/1500). * @param ConnectionName Name of the HMIS7PlusConnection. If empty, all S7+ connections are considered. * @returns PromiseParameterRejErrorCodeConnection */
SetPLCDateTime(ConnectionName?:string):PromiseParameterRejErrorCodeConnection;}
/** * Object model HMIRuntime.Connections. */interface HMIConnections{
/** * Accesses a HMIConnection object. * @param name Name of the HMIConnection. * @returns HMIConnection */(name:ConnectionName):HMIConnection;
/** * Accesses a HMIConnection object. * @param name Name of the HMIConnection. * @returns HMIConnection */
Item(name:ConnectionName):HMIConnection;readonly Enums:HMIConnectionsEnums;readonly SysFct:HMIConnectionsSysFct;}
/** * Object model Connection. */interface HMIConnection{
/** * Change to connection mode. * @param mode Mode of the HMIConnection, refer to the enum hmiConnectionMode. * @returns PromiseParameterRejErrorCodeConnection */
SetConnectionMode(mode:hmiConnectionMode):PromiseParameterRejErrorCodeConnection;}
/** * Object model DataSet. */interface HMIDataSet{
/** * The total number of elements in the DataSet. */readonly Count:UInt32;
/** * Accesses a single element within the DataSet collection and returns the value. * @param name Name of the element in the DataSet. * @returns Variant */(name:string):Variant;
/** * Accesses a single element within the DataSet collection and returns the value. * @param name Name of the element in the DataSet. * @returns Variant */
Item(name:string):Variant;
/** * Adds an element to the DataSet. * @param name The name of the element which has to be added to the DataSet. . * @param value The value of the corresponding element to be added to the DataSet . * @returns void */
Add(name:string,value:Variant):void;
/** * Checks if an element is present in the DataSet or not. * @param name The name of the element to be searched for in the DataSet. * @returns boolean */
Exists(name:string):boolean;
/** * Removes an element from the DataSet. * @param name The name of the element to be removed from the DataSet. * @returns void */
Remove(name:string):void;
/** * Removes all elements from the DataSet. * @returns void */
Clear():void;}
/** * Object model DataSetElement. */interface HMIDataSetElement{
/** * The Name of the element. */readonly Name:string;
/** * The Value of the element. */readonly Value:Variant;}
/** * Object model DatabaseStatementResult. */interface HMIDatabaseStatementResult{
/** * Array of Error result. */readonly Errors:HMIDatabaseDetailedError[];
/** * Array of rows for table. */readonly Rows:object[];}
/** * Object model DatabaseDetailedError. */interface HMIDatabaseDetailedError{
/** * Error Description. */readonly Message:string;
/** * ODBC Error State. */readonly State:string;}
/** * Object model DatabaseResult. */interface HMIDatabaseResult{
/** * Global Error code. */readonly GlobalError:ErrorCode;
/** * Results from select query. */readonly Results:HMIDatabaseStatementResult[];}
/** * Object model DatabaseConnection. */interface HMIDatabaseConnection{
/** * Executes query on database. * @param query Query string. * @param values Array of values. * @returns PromiseParameterDatabaseResult */
Execute(query:string,values?:Variant|Variant[]):PromiseParameterDatabaseResult;
/** * Close database connection. * @returns PromiseParameterDatabaseResult */
Close():PromiseParameterDatabaseResult;}
/** * Object model HMIRuntime.Database. */interface HMIDatabase{
/** * Establish connection to database using connection string. * @param connectionString Database connection string. * @returns PromiseParameterDatabaseConnection */
CreateConnection(connectionString:string):PromiseParameterDatabaseConnection;}
/** * Object model HMIRuntime.Device.Enums. */interface HMIDeviceEnums{readonly HMIStopRuntimeMode:typeof HMIStopRuntimeMode;}
/** * Object model HMIRuntime.Device.SysFct. */interface HMIDeviceSysFct{
/** * Sets the static IP address of a network interface. * @param AdapterName The name of the network interface, e.g. "X1". * @param IPAddress The new IPv4 address of the network interface in dotted quad notation (e.g. 192.168.133.15). * @param SubnetMask The new subnet mask of the network interface in dotted quad notation (e.g. 255.255.255.0). * @param DefaultGateway The IP address of the default gateway in dotted quad notation (e.g. 192.168.133.1). * @param DNSServer1 The IP address of primary DNS server (e.g. 192.168.133.1). * @param DNSServer2 The IP address of the secondary DNS server (e.g. 192.168.133.2). * @returns PromiseParameterRejErrorCode */
SetIPV4Address(AdapterName:string,IPAddress:string,SubnetMask:string,DefaultGateway?:string,DNSServer1?:string,DNSServer2?:string):PromiseParameterRejErrorCode;
/** * Gets the static IP address of a network interface. * @param AdapterName The name of the network interface, e.g. "X1". * @param IPAddress IPv4 address of the network interface in dotted quad notation (e.g. 192.168.133.15). * @param SubnetMask The new subnet mask of the network interface in dotted quad notation (e.g. 255.255.255.0). * @param DefaultGateway The IP address of the default gateway in dotted quad notation (e.g. 192.168.133.1). * @param DNSServer1 The IP address of the DNS server (e.g. 192.168.133.1). * @param DNSServer2 The IP address of the secondary DNS server (e.g. 192.168.133.2). * @returns PromiseParameterRejErrorCode */
GetIPV4Address(AdapterName:string,IPAddress:HMISetValueCommandBase,SubnetMask:HMISetValueCommandBase,DefaultGateway?:HMISetValueCommandBase,DNSServer1?:HMISetValueCommandBase,DNSServer2?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Sets the brightness of panel according to the value. * @param Value Value in percent and this value in panel is same as set by the system function. * @returns PromiseParameterRejErrorCode */
SetBrightness(Value:UInt16):PromiseParameterRejErrorCode;
/** * Gets the Brightness value to the tag. * @param Value The value as shown in the panel is written to the tag. * @returns PromiseParameterRejErrorCode */
GetBrightness(Value:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Using this an external application can be started. * @param ProgramName Name of the program. * @param ProgramParams Parameters to the program. * @param DisplayMode Displays mode and displayMode has no effect on Linux based devices. * @param WaitForProgramToEnd Based on this flag either function list execution continues or waits until program has ended. * @param Result Writes the result of the startProgram call to a tag. * @returns PromiseParameterRejErrorCode */
StartProgram(ProgramName:string,ProgramParams:string,DisplayMode:UInt16,WaitForProgramToEnd:boolean,Result?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Using GetDHCPState a tag is filled with correct DHCP state. * @param AdapterName The name of the network interface, e.g. "X1". * @param State State of DHCP. * @param IPV6 IP Address type EX: true=ipV6, false/undefinedipv4. * @returns PromiseParameterRejErrorCode */
GetDHCPState(AdapterName:string,State:HMISetValueCommandBase,IPV6?:boolean):PromiseParameterRejErrorCode;
/** * Using SetDHCPState,adapter state changes accordingly. * @param AdapterName The name of the network interface, e.g. "X1". * @param Enabled Mode of DHCP. * @param IPV6 IP Address type EX: true=ipV6, false/undefinedipv4. * @returns PromiseParameterRejErrorCode */
SetDHCPState(AdapterName:string,Enabled:boolean,IPV6?:boolean):PromiseParameterRejErrorCode;
/** * Get network interface state. * @param AdapterName The name of the network interface, e.g. "X1". * @param State State of the adapter. * @returns PromiseParameterRejErrorCode */
GetNetworkInterfaceState(AdapterName:string,State:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Set network interface state. * @param AdapterName The name of the network interface, e.g. "X1". * @param Enabled Mode of the adapter. * @returns PromiseParameterRejErrorCode */
SetNetworkInterfaceState(AdapterName:string,Enabled:boolean):PromiseParameterRejErrorCode;
/** * Removes external storage medium safely. * @param StorageDevice Storage device like SD-X51, USB-X61, USB-X62 etc. * @returns PromiseParameterRejErrorCode */
EjectStorageMedium(StorageDevice:string):PromiseParameterRejErrorCode;
/** * Opens Control Panel window in HMI Panel. * @param StartPage Control Panel page to be displayed. * @returns PromiseParameterRejErrorCode */
ShowControlPanel(StartPage:string):PromiseParameterRejErrorCode;
/** * Shows runtime software version. * @returns PromiseParameterRejErrorCode */
ShowSoftwareVersion():PromiseParameterRejErrorCode;
/** * Enable or Disable smart server. * @param State True to enable, False to disable. * @returns PromiseParameterRejErrorCode */
SetSmartServerState(State:boolean):PromiseParameterRejErrorCode;
/** * To know whether smart server is enabled or disabled. * @param State True to enable, False to disable. * @returns PromiseParameterRejErrorCode */
GetSmartServerState(State:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Capture current screen and store at specified location. * @param StoragePath Storage path where screen shot file will be stored. * @returns PromiseParameterRejErrorCode */
CreateScreenshot(StoragePath:string):PromiseParameterRejErrorCode;
/** * Exits runtime software and thereby running project. or Exits runtime software and thereby running project with restart operating system. * @param Mode Mode is 0(hmiStopRuntime) then Stop Runtime and Mode is 1(hmiStopRuntimeAndReboodDevice) then Stop Runtime with Restart Operating System. * @returns PromiseParameterRejErrorCode */
StopRuntime(Mode?:HMIStopRuntimeMode):PromiseParameterRejErrorCode;
/** * To know whether Event Logger is enabled or disabled. * @param State True means enable, False means disable. * @returns PromiseParameterRejErrorCode */
GetEventLoggerState(State:HMISetValueCommandBase):PromiseParameterRejErrorCode;}
/** * Object model HMIRuntime.Device. */interface HMIDevice{readonly Enums:HMIDeviceEnums;readonly SysFct:HMIDeviceSysFct;}
/** * Object model HMIRuntime.FileSystem.Enums. */interface FoldersEnums{readonly FolderId:typeof FolderId;}
/** * Object model HMIRuntime.FileSystem. */interface HMIFileSystem{
/** * Reads a text file from the filesystem. * @param path Path to the file. * @param encoding Encoding of the text file (e.g. utf8, utf16, ucs2, ...). * @returns PromiseReadFile */
ReadFile(path:string,encoding:string):PromiseReadFile;
/** * Reads a binary file from the filesystem. * @param path Path to the file. * @returns PromiseReadFileBinary */
ReadFileBinary(path:string):PromiseReadFileBinary;
/** * Creates and writes text in a file. * @param path Path to the file. * @param data Content of the file. * @param encoding Encoding of the text file (e.g. utf8, utf16, ucs2, ...). * @returns PromiseFile */
WriteFile(path:string,data:string,encoding:string):PromiseFile;
/** * Creates and writes binary data in a file. * @param path Path to the file. * @param data Content of the file. * @returns PromiseFile */
WriteFileBinary(path:string,data:Blob):PromiseFile;
/** * Appends and writes text data in a file. * @param path Path to the file. * @param data Content of the file. * @param encoding Encoding of the text file (e.g. utf8, utf16, ucs2, ...). * @returns PromiseFile */
AppendFile(path:string,data:string,encoding:string):PromiseFile;
/** * Appends and writes binary data in a file. * @param path Path to the file. * @param data Content of the file. * @returns PromiseFile */
AppendFileBinary(path:string,data:Blob):PromiseFile;
/** * Delete a file. * @param path Path to the file. * @returns PromiseFile */
DeleteFile(path:string):PromiseFile;
/** * Create a directory. * @param path Path to the directory. * @returns PromiseFile */
CreateDirectory(path:string):PromiseFile;
/** * Delete a directory, sub-directory and all files. * @param path Path to the directory. * @returns PromiseFile */
DeleteDirectory(path:string):PromiseFile;
/** * Read path of special folder in file system. * @param Folder Folder identifier. * @returns string */
GetSpecialFolder(Folder:FolderId):string;
/** * Gets a list of Files and Folders in a specific directory. * @param path Path of directory. * @param filter File filter, can contain the following wildcards: '*', '?'. * @param recursive Set to true for browsing sub-folders. Default value is "false". * @returns PromiseBrowse */
Browse(path:string,filter?:string,recursive?:boolean):PromiseBrowse;
/** * Returns true if the path points to a directory. * @param path Path of directory. * @returns boolean */
IsDirectory(path:string):boolean;readonly Enums:FoldersEnums;}
/** * Object model ErrorInfo. */interface HMIErrorObject{
/** * Error code received by scripting object model methods. */readonly ErrorCode:ErrorCode;
/** * Additional value for the error text. */readonly ErrorValues:Variant[];}
/** * Object model HMIRuntime.Trace.Enums. */interface HMITraceEnums{readonly hmiSeverity:typeof hmiSeverity;}
/** * Object model HMIRuntime. */interface HMIRuntime{
/** * The current user interface language id. */
Language:UInt32;
/** * Returns a detailed error description of the passed error code. * @param errorCode Error code received by scripting object model methods. * @returns string */
GetDetailedErrorDescription(errorCode:ErrorCode):string;readonly AlarmLogging:HMIAlarmLogging;readonly Alarming:HMIAlarming;readonly Audit:HMIAudit;readonly Connections:HMIConnections;readonly Database:HMIDatabase;readonly Device:HMIDevice;readonly FileSystem:HMIFileSystem;readonly Trace:HMITrace&{
/** * Writes a string to the trace buffer. * @param message The string message for the trace buffer. * @param traceSeverity Specifies the Severity level. * @returns void */(message:string,traceSeverity?:hmiSeverity):void;};readonly Math:HMIMath;readonly OpcUAClient:HMIOpcUAClient;readonly ParameterSetTypes:HMIParameterSetTypes;readonly PlantModel:HMIPlantModel;readonly Reporting:HMIReporting;readonly Resources:HMIResources;readonly TagLogging:HMITagLogging;readonly Tags:HMITags;readonly Timers:HMITimers;readonly UI:HMIUI;readonly UserManagement:HMIUserManagement;}
/** * Object model HMIRuntime.Trace. */interface HMITrace{readonly Enums:HMITraceEnums;}
/** * Object model SetValueCommandBase. */interface HMISetValueCommandBase{
/** * Used as helper function for SystemFunctions to set values (e.g. Tags). * @param Value * @returns ErrorCode */(Value:Variant):ErrorCode;
/** * Used as helper function for SystemFunctions to set values (e.g. Tags). * @param Value * @returns ErrorCode */
SetValue(Value:Variant):ErrorCode;}
/** * Object model HMIRuntime.Math. */interface HMIMath{
/** * Object is used to check if a particular value is a 64-Bit integer type (signed/unsigned). */readonly Int64Base:HMIInt64Base;
/** * Object represents an unsigned 64-Bit integer value. */readonly Uint64:HMIUint64;
/** * Object represents an signed 64-Bit integer value. */readonly Int64:HMIInt64;
/** * Object represents a precise time stamp using a 100 ns resolution. */readonly DatePrecise:HMIDatePrecise;
/** * This function converts RGBA value to hex value. * @param R Value of red. * @param G Value of Green. * @param B Value of Blue. * @param A Value of Alpha/Opacity. * @returns UInt32 */
RGB(R:UInt32,G:UInt32,B:UInt32,A?:UInt32):UInt32;
/** * This function converts RGBA value to hex value. * @param RGB Value of red,green and blue in hex. * @param A Value of Alpha/Opacity in hex. * @returns UInt32 */
RGBWeb(RGB:UInt32,A?:UInt32):UInt32;}
/** * Object model Int64Base. */interface HMIInt64Base{}
/** * Object model Int64. */interface HMIInt64{
/** * The lower 32-Bit of the 64-Bit Value. */readonly Lo:UInt32;
/** * The upper 32-Bit of the 64-Bit Value. */readonly Hi:UInt32;
/** * Create an new signed 64-Bit integer object. * @param value * @returns HMIInt64 */(value:Variant):HMIInt64;
/** * Create an new signed 64-Bit integer object. * @param value * @returns HMIInt64 */
Item(value:Variant):HMIInt64;
/** * Add a value. * @param value * @returns HMIInt64 */
Add(value:Variant):HMIInt64;
/** * Substracts a value. * @param value * @returns HMIInt64 */
Sub(value:Variant):HMIInt64;
/** * Multiplies a value. * @param value * @returns HMIInt64 */
Mul(value:Variant):HMIInt64;
/** * Divides a value. * @param value * @returns HMIInt64 */
Div(value:Variant):HMIInt64;
/** * Performs a bitwise AND operation. * @param value * @returns HMIInt64 */
And(value:Variant):HMIInt64;
/** * Performs a bitwise OR operation. * @param value * @returns HMIInt64 */
Or(value:Variant):HMIInt64;
/** * Performs a bitwise XOR operation. * @param value * @returns HMIInt64 */
Xor(value:Variant):HMIInt64;
/** * Performs a left-shift operation. * @param value * @returns HMIInt64 */
ShiftLeft(value:UInt8):HMIInt64;
/** * Performs a right-shift operation. * @param value * @returns HMIInt64 */
ShiftRight(value:UInt8):HMIInt64;
/** * Converts the value to a string. * @param base * @returns string */
toString(base?:UInt8):string;}
/** * Object model Uint64. */interface HMIUint64{
/** * The lower 32-Bit of the 64-Bit Value. */readonly Lo:UInt32;
/** * The upper 32-Bit of the 64-Bit Value. */readonly Hi:UInt32;
/** * Create an new unsigned 64-Bit integer object. * @param value * @returns HMIUint64 */(value:Variant):HMIUint64;
/** * Create an new unsigned 64-Bit integer object. * @param value * @returns HMIUint64 */
Item(value:Variant):HMIUint64;
/** * Add a value. * @param value * @returns HMIUint64 */
Add(value:Variant):HMIUint64;
/** * Substracts a value. * @param value * @returns HMIUint64 */
Sub(value:Variant):HMIUint64;
/** * Multiplies a value. * @param value * @returns HMIUint64 */
Mul(value:Variant):HMIUint64;
/** * Divides a value. * @param value * @returns HMIUint64 */
Div(value:Variant):HMIUint64;
/** * Performs a bitwise AND operation. * @param value * @returns HMIUint64 */
And(value:Variant):HMIUint64;
/** * Performs a bitwise OR operation. * @param value * @returns HMIUint64 */
Or(value:Variant):HMIUint64;
/** * Performs a bitwise XOR operation. * @param value * @returns HMIUint64 */
Xor(value:Variant):HMIUint64;
/** * Performs a left-shift operation. * @param value * @returns HMIUint64 */
ShiftLeft(value:UInt8):HMIUint64;
/** * Performs a right-shift operation. * @param value * @returns HMIUint64 */
ShiftRight(value:UInt8):HMIUint64;
/** * Converts the value to a string. * @param base * @returns string */
toString(base?:UInt8):string;}
/** * Object model DatePrecise. */interface HMIDatePrecise{
/** * Create an new DatePrecise object. * @param year This parameter can be either the full year, a DatePrecise object, a Date object, a DOMHighResTimeStamp, a 'Number' of milliseconds or a hrtime.) . * @param month The number of the month from 0 (January) to 11 (December). * @param day The number of the day from 1 to 31. * @param hours The number of the hour from 0 to 23. * @param minutes The number of the minute from 0 to 59. * @param seconds The number of the second from 0 to 59. * @param milliseconds The number of the millisecond from 0 to 999. * @param microseconds The number of the microsecond from 0 to 999. * @param nanoseconds The number of the nanosecond from 0 to 999. * @returns HMIDatePrecise */(year?:Variant,month?:UInt8,day?:UInt8,hours?:UInt8,minutes?:UInt8,seconds?:UInt8,milliseconds?:UInt16,microseconds?:UInt16,nanoseconds?:UInt16):HMIDatePrecise;
/** * Create an new DatePrecise object. * @param year This parameter can be either the full year, a DatePrecise object, a Date object, a DOMHighResTimeStamp, a 'Number' of milliseconds or a hrtime.) . * @param month The number of the month from 0 (January) to 11 (December). * @param day The number of the day from 1 to 31. * @param hours The number of the hour from 0 to 23. * @param minutes The number of the minute from 0 to 59. * @param seconds The number of the second from 0 to 59. * @param milliseconds The number of the millisecond from 0 to 999. * @param microseconds The number of the microsecond from 0 to 999. * @param nanoseconds The number of the nanosecond from 0 to 999. * @returns HMIDatePrecise */
Item(year?:Variant,month?:UInt8,day?:UInt8,hours?:UInt8,minutes?:UInt8,seconds?:UInt8,milliseconds?:UInt16,microseconds?:UInt16,nanoseconds?:UInt16):HMIDatePrecise;
/** * Get the time as DOMHighResTimeStamp. * @returns Float */
valueOf():Float;
/** * Converts the value to a string. * @returns string */
toString():string;
/** * Get the time as hrtime. * @returns Float[] */
GetHrTime():Float[];
/** * Set the time as hrtime. * @param hrTime * @returns void */
SetHrTime(hrTime:Float[]):void;
/** * Get the time as DOMHighResTimeStamp. * @returns Float */
GetTime():Float;
/** * Set the time as DOMHighResTimeStamp. * @param time * @returns void */
SetTime(time:Float):void;
/** * Get the number of microseconds (0 to 999). * @returns UInt16 */
GetMicroseconds():UInt16;
/** * Set the number of microseconds (0 to 999). * @param microSeconds * @returns void */
SetMicroseconds(microSeconds:UInt16):void;
/** * Get the number of nanoseconds (0 to 999). * @returns UInt16 */
GetNanoseconds():UInt16;
/** * Set the number of nanoseconds (0 to 999). * @param nanoSeconds * @returns void */
SetNanoseconds(nanoSeconds:UInt16):void;
/** * Get the time stamp as FILETIME (HMIUint64). * @returns HMIInt64 */
GetFiletime():HMIInt64;
/** * Set the time stamp as FILETIME (HMIUint64). * @param fileTime * @returns void */
SetFiletime(fileTime?:HMIInt64):void;}
/** * Object model OpcUAMethodResult. */interface HMIOpcUAMethodCallResult{
/** * OPC UA Status of the Method call: 0 if successful, an error code otherwise. */readonly Status:UInt32;
/** * Textual representation of the OPC UA status code returned by the Method call: E.g. BadInvalidArgument. */readonly ErrorDescription:string;
/** * The data returned by the OPC UA Method call. */readonly Result:object;}
/** * Object model OpcUAMethod. */interface HMIOpcUAGetMethodResult{
/** * OPC UA Status of finding the Method: 0 if successful, an error code otherwise. */readonly Status:UInt32;
/** * Textual representation of the OPC UA status code returned by finding the Method: E.g. BadInvalidArgument. */readonly ErrorDescription:string;
/** * Call the OPC UA Method with the given arguments. * @param inputArguments The input arguments of the OPC UA Method call, represented by a single object.  * 					E.g. {"name": "PC1", "pos": 2}. * @returns PromiseParameterCall */(inputArguments:object):PromiseParameterCall;
/** * Call the OPC UA Method with the given arguments. * @param inputArguments The input arguments of the OPC UA Method call, represented by a single object.  * 					E.g. {"name": "PC1", "pos": 2}. * @returns PromiseParameterCall */
Call(inputArguments:object):PromiseParameterCall;}
/** * Object model OpcUASession. */interface HMIOpcUASession{
/** * Get the OPC UA Method with the given OPC UA Browse Path. * @param browsePath OPC UA Browse Path of the Method: an array of objects with "Namespace" and "Name" properties. * @returns PromiseParameterGetMethod */(browsePath:object[]):PromiseParameterGetMethod;
/** * Get the OPC UA Method with the given OPC UA Browse Path. * @param browsePath OPC UA Browse Path of the Method: an array of objects with "Namespace" and "Name" properties. * @returns PromiseParameterGetMethod */
GetMethod(browsePath:object[]):PromiseParameterGetMethod;
/** * Disconnect from the HMI Connection. * @returns void */
Disconnect():void;}
/** * Object model OpcUAConnectResult. */interface HMIOpcUAConnectResult{
/** * OPC UA Status of the connect call: 0 if successful, an error code otherwise. */readonly Status:UInt32;
/** * Textual representation of the OPC UA status code returned by the connect call: E.g. BadInvalidArgument. */readonly ErrorDescription:string;
/** * Handle for the given session for subsequent OPC UA calls. */readonly Session:HMIOpcUASession;}
/** * Object model HMIRuntime.OpcUAClient. */interface HMIOpcUAClient{
/** * Establish the OPC UA connection to a defined HMI Connection. * @param connectionName Name of the HMI Connection. * @returns PromiseParameterConnect */(connectionName:ConnectionName):PromiseParameterConnect;
/** * Establish the OPC UA connection to a defined HMI Connection. * @param connectionName Name of the HMI Connection. * @returns PromiseParameterConnect */
Connect(connectionName:ConnectionName):PromiseParameterConnect;}
/** * Object model ParameterSetTypes.Enums. */interface HMIPacoEnums{readonly hmiOverwrite:typeof hmiOverwrite;}
/** * Object model ParameterSet. */interface HMIParameterSet{
/** * Transfers the specified ParameterSet from the PLC to the storage medium of the HMI device. * @param OverWrite Specifies whether an existing ParameterSet is overwritten. * @param OutputStatus Determines whether a status message is output after transfer. * @returns PromiseParameterRejErrorCode */
ReadAndSave(OverWrite:hmiOverwrite,OutputStatus:boolean):PromiseParameterRejErrorCode;
/** * Transfers the specified ParameterSet directly from the data medium of the HMI device to the PLC. * @param OutputStatus Determines whether a status message is output after transfer. * @returns PromiseParameterRejErrorCode */
LoadAndWrite(OutputStatus:boolean):PromiseParameterRejErrorCode;
/** * Get the name of the specified ParameterSet. * @param Language Language ID. * @returns PromiseParameterRejErrorCode */
GetName(Language:UInt32):PromiseParameterRejErrorCode;}
/** * Object model ParameterSets. */interface HMIParameterSets{
/** * Creates parameter set object. * @param parameterSetId Number or name of the ParameterSet. * @returns HMIParameterSet */(parameterSetId:string|UInt32):HMIParameterSet;
/** * Creates parameter set object. * @param parameterSetId Number or name of the ParameterSet. * @returns HMIParameterSet */
Item(parameterSetId:string|UInt32):HMIParameterSet;}
/** * Object model ParameterSetType. */interface HMIParameterSetType{
/** * Creates parameter set collection object. */readonly ParameterSets:HMIParameterSets;
/** * Imports one or all ParameterSets of a ParameterSetType. * @param FileName Name of file from which ParameterSets to be imported. * @param ParameterSetId User defined ID or name of the ParameterSet. * @param OverWrite Specifies whether an existing ParameterSet is overwritten. * @param OutputStatus Determines whether a status message is output after transfer. * @param VerifyChecksum Determines if the checksum should be verified during import. * @returns PromiseParameterRejErrorCode */
Import(FileName:string,ParameterSetId:Variant,OverWrite:hmiOverwrite,OutputStatus:boolean,VerifyChecksum:boolean):PromiseParameterRejErrorCode;
/** * Exports one or all ParameterSets of a ParameterSetType. * @param ParameterSetId User defined ID or name of the ParameterSet. * @param FileName Name of file from which ParameterSets to be imported. * @param OverWrite Specifies whether an existing ParameterSet is overwritten. * @param OutputStatus Determines whether a status message is output after transfer. * @param GenerateChecksum Determines if the checksum should be verified during import. * @returns PromiseParameterRejErrorCode */
Export(ParameterSetId:Variant,FileName:string,OverWrite:hmiOverwrite,OutputStatus:boolean,GenerateChecksum:boolean):PromiseParameterRejErrorCode;
/** * Get the name of the specified ParameterSetType. * @param Language Language ID. * @returns PromiseParameterRejErrorCode */
GetName(Language:UInt32):PromiseParameterRejErrorCode;}
/** * Object model HMIRuntime.ParameterSetTypes. */interface HMIParameterSetTypes{
/** * Creates parameter set type object. * @param parameterSetTypeId Number or name of the ParameterSetType. * @returns HMIParameterSetType */(parameterSetTypeId:string|UInt32):HMIParameterSetType;
/** * Creates parameter set type object. * @param parameterSetTypeId Number or name of the ParameterSetType. * @returns HMIParameterSetType */
Item(parameterSetTypeId:string|UInt32):HMIParameterSetType;readonly Enums:HMIPacoEnums;readonly SysFct:HMIParameterSetTypesSysFct;}
/** * Object model HMIRuntime.ParameterSetTypes.SysFct. */interface HMIParameterSetTypesSysFct{
/** * Transfers the specified ParameterSet from the PLC to the storage medium of the HMI device. * @param ParameterSetTypeId User defined ID or name of the ParameterSetType. * @param ParameterSetId User defined ID or name of the ParameterSet. * @param OverWrite Specifies whether an existing ParameterSet is overwritten. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @returns PromiseParameterRejErrorCode */
ReadAndSaveParameterSet(ParameterSetTypeId:Variant,ParameterSetId:Variant,OverWrite:UInt32,OutputStatus:boolean,ProcessingStatus?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Transfers the specified ParameterSet directly from the data medium of the HMI device to the PLC. * @param ParameterSetTypeId User defined ID or name of the ParameterSetType. * @param ParameterSetId User defined ID or name of the ParameterSet. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @returns PromiseParameterRejErrorCode */
LoadAndWriteParameterSet(ParameterSetTypeId:Variant,ParameterSetId:Variant,OutputStatus:boolean,ProcessingStatus?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Imports one or all ParameterSets of a ParameterSetType. * @param FileName Name of file from which ParameterSets to be imported. * @param ParameterSetId User defined ID or name of the ParameterSet. * @param OverWrite Specifies whether an existing ParameterSet is overwritten. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @param VerifyChecksum Determines if the checksum should be verified during import. * @returns PromiseParameterRejErrorCode */
ImportParameterSets(FileName:string,ParameterSetId:Variant,OverWrite:UInt32,OutputStatus:boolean,ProcessingStatus:HMISetValueCommandBase,VerifyChecksum:boolean):PromiseParameterRejErrorCode;
/** * Exports one or all ParameterSets of a ParameterSetType. * @param ParameterSetTypeId User defined ID or name of the ParameterSetType. * @param ParameterSetId User defined ID or name of the ParameterSet. * @param FileName Name of file from which ParameterSets to be imported. * @param OverWrite Specifies whether an existing ParameterSet is overwritten. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @param GenerateChecksum Determines if the checksum should be verified during import. * @returns PromiseParameterRejErrorCode */
ExportParameterSets(ParameterSetTypeId:Variant,ParameterSetId:Variant,FileName:string,OverWrite:UInt32,OutputStatus:boolean,ProcessingStatus:HMISetValueCommandBase,GenerateChecksum:boolean):PromiseParameterRejErrorCode;
/** * Read the values of the ParameterSet loaded in the PLC to the corresponding edit tag. * @param ParameterSetType User defined ID or name of the ParameterSetType. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @returns PromiseParameterRejErrorCode */
ReadParameterSet(ParameterSetType:Variant,OutputStatus:boolean,ProcessingStatus?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Write the values of the edit tag (session local tag) to the PLC . * @param ParameterSetType User defined ID or name of the ParameterSetType. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @returns PromiseParameterRejErrorCode */
WriteParameterSet(ParameterSetType:Variant,OutputStatus:boolean,ProcessingStatus?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Create a Parameter set with default value configured in Engineering System. * @param ParameterSetType User defined ID or name of the ParameterSetType. * @param ParameterSetID User defined ID of the ParameterSet if provided else default ID will be assigned. * @param ParameterSetName User defined name of the ParameterSet if provided else default name will be assigned. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @returns PromiseParameterRejErrorCode */
CreateParameterSet(ParameterSetType:Variant,ParameterSetID:UInt32,ParameterSetName:string,OutputStatus:boolean,ProcessingStatus?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Saves the current values of the edit tag (session local tag) as ParameterSet to the memory medium of the HMI device. * @param ParameterSetType User defined ID or name of the ParameterSetType. * @param ParameterSet User defined ID or name of the ParameterSet. * @param OverWrite Specifies whether an existing ParameterSet is overwritten. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @returns PromiseParameterRejErrorCode */
SaveParameterSet(ParameterSetType:Variant,ParameterSet:Variant,OverWrite:boolean,OutputStatus:boolean,ProcessingStatus?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Loads the specified ParameterSet from the Parameter control storage in the edit Tag (session local tag). * @param ParameterSetType User defined ID or name of the ParameterSetType. * @param ParameterSet User defined ID or name of the ParameterSet. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @returns PromiseParameterRejErrorCode */
LoadParameterSet(ParameterSetType:Variant,ParameterSet:Variant,OutputStatus:boolean,ProcessingStatus?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Deletes the specified ParameterSet. * @param ParameterSetType User defined ID or name of the ParameterSetType. * @param ParameterSet User defined ID or name of the ParameterSet. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @returns PromiseParameterRejErrorCode */
DeleteParameterSet(ParameterSetType:Variant,ParameterSet:Variant,OutputStatus:boolean,ProcessingStatus?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * This allows the user to rename the parameterset name to current runtime language.  * 					If the parameter set type id / parameterset id does not exist, the rename operation will be cancelled. * @param ParameterSetType User defined ID or name of the ParameterSetType. * @param ParameterSet User defined ID or name of the ParameterSet. * @param NewParameterSetName User defined name to rename the existing parameterset. * @param OutputStatus Determines whether a status message is output after transfer. * @param ProcessingStatus Returns the processing status of the system function. * @returns PromiseParameterRejErrorCode */
RenameParameterSet(ParameterSetType:Variant,ParameterSet:Variant,NewParameterSetName:string,OutputStatus:boolean,ProcessingStatus?:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * @param ParameterSetTypeId User defined ID or name of the ParameterSetType. * @param ParameterSetId User defined ID or name of the ParameterSet. * @param Language Language ID. * @param ParameterSetName Retrieve name of ParameterSet for the provided ParameterSetID based on LanguageId. * @param ProcessingStatus  Processing status from the System Function. * @returns PromiseParameterRejErrorCode */
GetParameterSetName(ParameterSetTypeId:UInt32,ParameterSetId:UInt32,Language:UInt32,ParameterSetName:HMISetValueCommandBase,ProcessingStatus:HMISetValueCommandBase):PromiseParameterRejErrorCode;
/** * Get the name of the specified ParameterSetType. * @param ParameterSetTypeId User defined ID of ParameterSetType. * @param Language Language ID. * @param ParameterSetTypeName Retrieve name of ParameterSetType for the provided ParameterSetTypeID based on LanguageId. * @param ProcessingStatus Returns the processing status of the system function. * @returns PromiseParameterRejErrorCode */
GetParameterSetTypeName(ParameterSetTypeId:UInt32,Language:UInt32,ParameterSetTypeName:HMISetValueCommandBase,ProcessingStatus:HMISetValueCommandBase):PromiseParameterRejErrorCode;}
/** * Object model PlantObject. */interface HMIPlantObject{
/** * Name of the HMIPlantObject. */readonly Name:string;
/** * Parent of the PlantObject. The base for the navigation is the ViewPath of the PlantObject. */readonly Parent:HMIPlantObject;
/** * Returns a HMIPlantObjectSet object. */readonly Children:HMIPlantObject;
/** * Map of the viewname to the path of the plantObject in that view. */readonly PlantViewPaths:StringStringMap;
/** * The name of the selected view of the plantObject object (e.g. 'Maintenance'). */
CurrentPlantView:string;
/** * Last ErrorCode. */readonly LastError:ErrorCode;
/** * Collection of the visualization screens associated with plantObject. */readonly InstanceScreens:string[];
/** * Returns a PlantObject object. * @param ChildName Name of the child in the view. * @returns HMIPlantObject */
GetChild(ChildName:string):HMIPlantObject;
/** * List of properties. * @param propertyName * @returns HMIPlantObjectPropertySet */
GetProperties(propertyName?:string|string[]):HMIPlantObjectPropertySet;
/** * To get Active alarms of the PlantObject without starting and stopping subscription in script. * @param Language * @param IncludeChildren To indicate whether to include all the alarms belonging to children of current Plant object. * @param Filter Filter for subscription. * @returns PromiseParameterAlarmResultArrayPlantObject */
GetActiveAlarms(Language:UInt32,IncludeChildren?:boolean,Filter?:string):PromiseParameterAlarmResultArrayPlantObject;
/** * To create subscription for alarm associated with a plant object. * @returns HMIPlantObjectAlarmSubscription */
CreateAlarmSubscription():HMIPlantObjectAlarmSubscription;}
/** * Object model PlantObjectPropertySet. */interface HMIPlantObjectPropertySet{
/** * The number of PlantObjectProperty in the PlantObjectPropertySet. */readonly Count:UInt32;
/** * Accesses a PlantObjectProperty object within the PlantObjectPropertySet. * @param name PlantObject name or index (0..n). * @returns HMIPlantObjectProperty */(name:string|Int32):HMIPlantObjectProperty;
/** * Accesses a PlantObjectProperty object within the PlantObjectPropertySet. * @param name PlantObject name or index (0..n). * @returns HMIPlantObjectProperty */
Item(name:string|Int32):HMIPlantObjectProperty;
/** * Accesses a PlantObjectProperty object within the PlantObjectPropertySet. * @returns void */
Read():void;
/** * Reads the values of all HMIPlantObjectProperties in the PlantObjectPropertySet asynchronously using a Promise object. * @returns PromiseParameterPlantObjectSet */
ReadAsync():PromiseParameterPlantObjectSet;
/** * Accesses a PlantObjectProperty object within the PlantObjectPropertySet. * @returns void */
Write():void;
/** * Writes the values of all HMIPlantObjectProperties in the HMIPlantObjectPropertySet asynchronously using a Promise object. * @returns PromiseParameterPlantObjectSet */
WriteAsync():PromiseParameterPlantObjectSet;
/** * Adds a single property or a set of properties into the property set. * @param name Property names to be added to the property set. * @returns HMIPlantObjectProperty[] */
Add(name:string):HMIPlantObjectProperty[];
/** * Removes a single property or a set of properties from the property set. * @param name Property names to be removed from the property set. * @returns void */
Remove(name:string):void;}
/** * Object model PlantObjectProperty. */interface HMIPlantObjectProperty{
/** * Name of the PlantObjectProperty. */readonly Name:string;
/** * Value of the PlantObjectProperty. */
Value:Variant;
/** * QualityCode of the Value. */readonly QualityCode:UInt32;
/** * TimeStamp of the Value. */readonly TimeStamp:DateTime;
/** * ErrorCode of the previous Read or Write operation. */readonly LastError:ErrorCode;
/** * Reads the value of the HMIPlantObjectProperty. * @returns Variant */
Read():Variant;
/** * Writes the value of the HMIPlantObjectProperty. * @param value * @returns void */
Write(value?:Variant):void;}
/** * Object model PlantObjectAlarmSubscription. */interface HMIPlantObjectAlarmSubscription{
/** * Filter for subscription. */
Filter:string;
/** *  The language for all texts and also for the filter setting. */
Language:UInt32;
/** * Array of system names. */
SystemNames:string[];
/** * Callback function that is invoked to provide the alarm attributes through the AlarmResult array. * This property is write-only. */set OnAlarm(value:HMIOnAlarmCB);
/** * To indicate whether to include all the alarms belonging to children of current Plant object. */
IncludeChildren:boolean;
/** * To subscribe active alarms in scripting according to filter criteria given. * @returns ErrorCode */
Start():ErrorCode;
/** * To cancel subscription for alarms. * @returns ErrorCode */
Stop():ErrorCode;}
/** * Object model HMIRuntime.PlantModel. */interface HMIPlantModel{
/** * Last ErrorCode. */readonly LastError:ErrorCode;
/** * Returns a HMIPlantObject object. * @param plantObject PlantObject path inside the view or a flat HMIPlantObjectName. * @returns HMIPlantObject */
GetPlantObject(plantObject:string):HMIPlantObject;
/** * Returns an array of HMIPlantObject objects. * @param PlantObjectType Name of a PlantObject type. * @param ViewPath View path. * @returns HMIPlantObject[] */
GetPlantObjectsByType(PlantObjectType:string,ViewPath?:string):HMIPlantObject[];
/** * Returns an array of HMIPlantObject objects. * @param PropertyNames List of property names. * @param ViewPath View path. * @returns HMIPlantObject[] */
GetPlantObjectsByPropertyNames(PropertyNames:string|string[],ViewPath?:string):HMIPlantObject[];
/** * Returns an array of HMIPlantObject objects. * @param PropertyNames List of property names. * @param PlantObjectType Name of a PlantObject type. * @param ExpressionFilter Filter for property values. * @param ViewPath View path. * @returns HMIPlantObject[] */
GetPlantObjectsByExpression(PropertyNames:string|string[],PlantObjectType:string,ExpressionFilter:string,ViewPath?:string):HMIPlantObject[];}
/** * Object model HMIRuntime.Reporting.SysFct. */interface HMIReportingSysFct{
/** * Starts the specified report. * @param ReportTaskName Name of the report task. * @returns PromiseParameterRejErrorCode */
ExecuteReport(ReportTaskName:string):PromiseParameterRejErrorCode;}
/** * Object model HMIRuntime.Reporting. */interface HMIReporting{readonly SysFct:HMIReportingSysFct;}
/** * Object model HMIRuntime.Resources.SysFct. */interface HMIResourcesSysFct{
/** * Retrieves a text from a text list based on index and selected language. * @param OutputText Tag to be filled with the selected text. * @param index Index of the text list entry to be read. * @param lcid LCID of the required language. * @param TextListName Name of the text list. * @returns ErrorCode */
LookUpText(OutputText:HMISetValueCommandBase,index:Variant,lcid:UInt32,TextListName:string):ErrorCode;}
/** * Object model TextListEntry. */interface HMITextListEntry{
/** * Index of an textlist entry. */readonly Index:Int32;
/** * Retrieves an entry of a textlist. * @param lcid Language of the text. * @returns string */(lcid:Int32):string;
/** * Retrieves an entry of a textlist. * @param lcid Language of the text. * @returns string */
Item(lcid:Int32):string;}
/** * Object model TextList. */interface HMITextList{
/** * Name of the HMITextList. */readonly Name:string;
/** * Retrieves an entry of a textlist. * @param index Index of TextList entry. * @returns HMITextListEntry */(index:Int32):HMITextListEntry;
/** * Retrieves an entry of a textlist. * @param index Index of TextList entry. * @returns HMITextListEntry */
Item(index:Int32):HMITextListEntry;
/** * Retrieves texts of a textlist for an array of values as an array of strings. * @param lcid Language of the texts. * @param values Array of values for which the text list entries are looked up. * @returns string[] */
TextsByValues(lcid:Int32,values:Int32[]):string[];}
/** * Object model TextLists. */interface HMITextLists{
/** * Returns a HMITextList object. * @param textListName Name of the HMITextList. * @returns HMITextList */(textListName:string):HMITextList;
/** * Returns a HMITextList object. * @param textListName Name of the HMITextList. * @returns HMITextList */
Item(textListName:string):HMITextList;}
/** * Object model Graphic. */interface HMIGraphic{
/** * Fully qualified name of the graphic. example: "@GraphicLibrary.Home". */readonly Name:string;}
/** * Object model Graphics. */interface HMIGraphics{
/** * Returns a HMIGraphic object. * @param graphicName Fully qualified name of the Graphic : "ContainerName.GraphicName" . * @returns HMIGraphic */(graphicName:string):HMIGraphic;
/** * Returns a HMIGraphic object. * @param graphicName Fully qualified name of the Graphic : "ContainerName.GraphicName" . * @returns HMIGraphic */
Item(graphicName:string):HMIGraphic;}
/** * Object model Color. */interface HMIColor{
/** * Used to identify the color by name. */readonly Name:string;
/** * Screen color as numerical representation. */readonly Value:UInt32;
/** * Index of color in color resources range(1..n). */readonly Index:UInt32;}
/** * Object model Colors. */interface HMIColors{
/** * Returns a HMIColor object. * @param nameOrIndex Name of the Color : "ColorPaletteName.ColorName" or index (1..n) . * @returns HMIColor */(nameOrIndex:string|UInt32):HMIColor;
/** * Returns a HMIColor object. * @param nameOrIndex Name of the Color : "ColorPaletteName.ColorName" or index (1..n) . * @returns HMIColor */
Item(nameOrIndex:string|UInt32):HMIColor;}
/** * Object model ColorPalette. */interface HMIColorPalette{
/** * ColorPalette identified by name. */readonly Name:string;}
/** * Object model ColorPalettes. */interface HMIColorPalettes{
/** * Returns a HMIColorPalette object. * @param name Name of the ColorPalette. * @returns HMIColorPalette */(name:string):HMIColorPalette;
/** * Returns a HMIColorPalette object. * @param name Name of the ColorPalette. * @returns HMIColorPalette */
Item(name:string):HMIColorPalette;}
/** * Object model HMIRuntime.Resources. */interface HMIResources{
/** * Used to access TextLists. */readonly TextLists:HMITextLists;
/** * Used to access Graphics. */readonly Graphics:HMIGraphics;
/** * Used to access Colors. */readonly Colors:HMIColors;
/** * USed to access ColorPalettes. */readonly ColorPalettes:HMIColorPalettes;readonly SysFct:HMIResourcesSysFct;}
/** * Object model HMIRuntime.UI.Enums. */interface HmiUIEnums{readonly HmiAggregationMode:typeof HmiAggregationMode;readonly HmiAlarmBlock:typeof HmiAlarmBlock;readonly HmiAlarmControlID:typeof HmiAlarmControlID;readonly HmiAlarmSourceType:typeof HmiAlarmSourceType;readonly HmiAlarmStatisticBlock:typeof HmiAlarmStatisticBlock;readonly HmiApplicationState:typeof HmiApplicationState;readonly HmiBackgroundFillMode:typeof HmiBackgroundFillMode;readonly HmiBarMode:typeof HmiBarMode;readonly HmiCapType:typeof HmiCapType;readonly HmiCharSet:typeof HmiCharSet;readonly HmiClientInfoType:typeof HmiClientInfoType;readonly HmiContentMode:typeof HmiContentMode;readonly HmiDashType:typeof HmiDashType;readonly HmiDataGridHeaderType:typeof HmiDataGridHeaderType;readonly HmiDetailedParameterControlBlock:typeof HmiDetailedParameterControlBlock;readonly HmiDetailedParameterControlID:typeof HmiDetailedParameterControlID;readonly HmiDisplayViewType:typeof HmiDisplayViewType;readonly HmiEditMode:typeof HmiEditMode;readonly HmiEventTrigger:typeof HmiEventTrigger;readonly HmiFillDirection:typeof HmiFillDirection;readonly HmiFillPattern:typeof HmiFillPattern;readonly HmiFlashingCondition:typeof HmiFlashingCondition;readonly HmiFlashingRate:typeof HmiFlashingRate;readonly HmiFlipMode:typeof HmiFlipMode;readonly HmiFontStrikeOut:typeof HmiFontStrikeOut;readonly HmiFontWeight:typeof HmiFontWeight;readonly HmiFunctionTrendControlID:typeof HmiFunctionTrendControlID;readonly HmiGesture:typeof HmiGesture;readonly HmiGmpSetting:typeof HmiGmpSetting;readonly HmiGraphicStretchMode:typeof HmiGraphicStretchMode;readonly HmiGraphOverviewBlock:typeof HmiGraphOverviewBlock;readonly HmiGridColoringMode:typeof HmiGridColoringMode;readonly HmiGridLine:typeof HmiGridLine;readonly HmiGridSelectionMode:typeof HmiGridSelectionMode;readonly HmiHorizontalAlignment:typeof HmiHorizontalAlignment;readonly HmiIOFieldType:typeof HmiIOFieldType;readonly HmiKeyboardModifier:typeof HmiKeyboardModifier;readonly HmiLineEndType:typeof HmiLineEndType;readonly HmiLineJoinType:typeof HmiLineJoinType;readonly HmiMarkerType:typeof HmiMarkerType;readonly HmiMeasurementUnit:typeof HmiMeasurementUnit;readonly HmiMediaControlID:typeof HmiMediaControlID;readonly HmiOpenLinkMode:typeof HmiOpenLinkMode;readonly HmiOperability:typeof HmiOperability;readonly HmiOrientation:typeof HmiOrientation;readonly HmiOverviewParameterControlBlock:typeof HmiOverviewParameterControlBlock;readonly HmiOverviewParameterControlID:typeof HmiOverviewParameterControlID;readonly HmiPeakIndicator:typeof HmiPeakIndicator;readonly HmiPersistencyScope:typeof HmiPersistencyScope;readonly HmiPipeConnectionState:typeof HmiPipeConnectionState;readonly HmiProcessControlID:typeof HmiProcessControlID;readonly HmiProcessDiagnosisCriteriaAnalysisBlock:typeof HmiProcessDiagnosisCriteriaAnalysisBlock;readonly HmiProcessDiagnosisCriteriaAnalysisControlID:typeof HmiProcessDiagnosisCriteriaAnalysisControlID;readonly HmiProcessDiagnosisDetailViewType:typeof HmiProcessDiagnosisDetailViewType;readonly HmiProcessDiagnosisGraphOverviewControlID:typeof HmiProcessDiagnosisGraphOverviewControlID;readonly HmiProcessDiagnosisOverviewControlID:typeof HmiProcessDiagnosisOverviewControlID;readonly HmiProcessDiagnosisPlcCodeViewerControlID:typeof HmiProcessDiagnosisPlcCodeViewerControlID;readonly HmiProcessIndicatorMode:typeof HmiProcessIndicatorMode;readonly HmiQuality:typeof HmiQuality;readonly HmiRequestResult:typeof HmiRequestResult;readonly HmiResourceListType:typeof HmiResourceListType;readonly HmiRotationCenterPlacement:typeof HmiRotationCenterPlacement;readonly HmiScaleMode:typeof HmiScaleMode;readonly HmiScalingType:typeof HmiScalingType;readonly HmiScreenWindowAdaption:typeof HmiScreenWindowAdaption;readonly HmiScrollBarVisibility:typeof HmiScrollBarVisibility;readonly HmiSelectionMode:typeof HmiSelectionMode;readonly HmiSimpleGridLine:typeof HmiSimpleGridLine;readonly HmiSimplePosition:typeof HmiSimplePosition;readonly HmiSortDirection:typeof HmiSortDirection;readonly HmiSourceState:typeof HmiSourceState;readonly HmiSymbolEffect:typeof HmiSymbolEffect;readonly HmiSystemDiagnosisControlBlock:typeof HmiSystemDiagnosisControlBlock;readonly HmiSystemDiagnosisControlID:typeof HmiSystemDiagnosisControlID;readonly HmiSystemDiagnosisMatrixBlock:typeof HmiSystemDiagnosisMatrixBlock;readonly HmiSystemDiagnosisViewType:typeof HmiSystemDiagnosisViewType;readonly HmiTextPosition:typeof HmiTextPosition;readonly HmiTextTrimming:typeof HmiTextTrimming;readonly HmiTextWrapping:typeof HmiTextWrapping;readonly HmiThresholdIndicator:typeof HmiThresholdIndicator;readonly HmiThresholdMode:typeof HmiThresholdMode;readonly HmiTimeRangeBase:typeof HmiTimeRangeBase;readonly HmiTimeRangeStart:typeof HmiTimeRangeStart;readonly HmiTimeRangeType:typeof HmiTimeRangeType;readonly HmiTrendCompanionID:typeof HmiTrendCompanionID;readonly HmiTrendCompanionMode:typeof HmiTrendCompanionMode;readonly HmiTrendControlID:typeof HmiTrendControlID;readonly HmiTrendInfoBlock:typeof HmiTrendInfoBlock;readonly HmiTrendMode:typeof HmiTrendMode;readonly HmiValueTendency:typeof HmiValueTendency;readonly HmiVerticalAlignment:typeof HmiVerticalAlignment;readonly HmiVideoOutput:typeof HmiVideoOutput;readonly HmiVisibleAlarms:typeof HmiVisibleAlarms;readonly HmiWebControlID:typeof HmiWebControlID;readonly HmiWindowFlag:typeof HmiWindowFlag;readonly HmiWindowStartupPosition:typeof HmiWindowStartupPosition;readonly HmiWindowState:typeof HmiWindowState;}
/** * Object model AlarmColumn. */interface HmiAlarmColumnPart extends HmiScreenObjectBase{UseAlarmColors:boolean;AlarmBlock:HmiAlarmBlock;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model AlarmControl. */interface HmiAlarmControl<ScreenItemName=string>extends HmiScreenItemBase{UseAlarmColors:boolean;
/** * The specification of the filter syntax is defined in SDS CHROM General (please refer to "Query Language" chapter 4.1.4). An additional object model that allows to be mapped onto a filter string is currently an open issue. */
Filter:string;
/** * Systems that are sources for alarms. If this property is empty, all known systems will be used. */
Systems:string[]|Int32[];
/** * Migration hint: Was "AutoScroll" in Classic. Depending on the sort order of the columns, the grid will always show the latest (new) entry on top or bottom of the control. */
AlwaysShowRecent:boolean;AlarmSourceType:HmiAlarmSourceType;
/** * Only considered with source type "AlarmDefinition". */
AlarmDefinitionViewSetup:HmiVisibleAlarms;
/** * Only considered with source type "ActiveAlarms". */
ActiveAlarmsViewSetup:HmiVisibleAlarms;
/** * Supresses any flashing at control level. */
SuppressFlashing:boolean;
/** * Defines the flashing rate for alarms which have to be acknowledged. */
AcknowledgmentFlashingRate:HmiFlashingRate;
/** * Defines the flashing rate for alarms which have to be reset. */
ResetFlashingRate:HmiFlashingRate;
/** * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local). */
TimeZone:HmiTimeZone;
/** * If none of the Columns has a sort criteria, the DefaultSortDirection of the control is applied to the time column. */
DefaultSortDirection:HmiSortDirection;
/** * Accepts only columns of type HmiAlarmColumnPart. */
AlarmView:HmiDataGridViewPart;
/** * Accepts only columns of type HmiAlarmStatisticColumnPart. */
AlarmStatisticsView:HmiDataGridViewPart;AlarmStatisticsSettings:HmiAlarmStatisticsSettingsPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;
/** * Gets the data of the selected rows of the current alarm view. * @returns void */
GetSelectedAlarmData():void;
/** * Removes the user changes in the AlarmControl from the user profile service. * @param Scope * @returns void */
ResetUserProfile(Scope:object):void;
/** * Persists the user changes in the AlarmControl in the user profile service. * @param Scope * @returns void */
SaveUserProfile(Scope:object):void;}
/** * Object model AlarmStatisticColumn. */interface HmiAlarmStatisticColumnPart extends HmiScreenObjectBase{AlarmStatisticBlock:HmiAlarmStatisticBlock;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model AlarmStatisticsSettings. */interface HmiAlarmStatisticsSettingsPart extends HmiScreenObjectBase{TimeRangeFactor:Int32;TimeRangeBase:HmiTimeRangeBase;
/** * Max limit on the number of records fetched. */
MaximumRecords:UInt16;BeginTime:DateTime;TimeRangeStart:HmiTimeRangeStart;}
/** * Object model Application. */interface HmiApplicationPart extends HmiScreenObjectBase{readonly ApplicationExitCode:UInt32;readonly ApplicationState:HmiApplicationState;readonly ApplicationName:string;readonly Arguments:string;readonly WorkingDirectory:string;readonly TerminateApplicationOnLeave:boolean;readonly Environment:string;}
/** * Object model BackgroundSystem. */interface HmiBackgroundSystemPart extends HmiScreenObjectBase{readonly RenderingTemplate:string;}
/** * Object model Badge. */interface HmiBadgePart extends HmiScreenObjectBase{}
/** * Object model Bar. */interface HmiBar<ScreenItemName=string>extends HmiScreenItemBase{
/** * Migration hint: Was called "SegmentColoring" in Classic. */
BarMode:HmiBarMode;StraightScale:HmiStraightScalePart;ProcessValue:Variant;
/** * Specifies how to illustrate limit indicators. Migration hint: Combines old properties "ShowLimitLines", "ShowLimitMarkers", etc. */
ThresholdIndicators:HmiThresholdIndicator;
/** * The trend Indicator itself is part of the rendering template (e.g. an arrow up/down) and will be shown if latest value was higher/lower than the previous one. */
ShowTrendIndicator:boolean;TrendIndicatorColor:UInt32;
/** * Used for ProcessIndicator or for Bar in SegementedStatic. */
ProcessValueIndicatorForeColor:UInt32;ProcessValueIndicatorBackColor:UInt32;
/** * Defines the visual representation of indicator for the current process value. */
ProcessValueIndicatorMode:HmiProcessIndicatorMode;
/** * Migration hint: Known as "StartValue". */
OriginValue:Float;
/** * States whether the origin value is an absolute value or if the origin is calculated from a percental declaration between minimum and maximum value. */
RelativeToOrigin:boolean;
/** * Defines whether indicators for the highest/lowest value seen have to be shown. ("Schleppzeiger"). */
PeakIndicators:HmiPeakIndicator;OutputFormat:string;NormalRangeColor:UInt32;
/** * Max peak value based on the ProcessValue. */readonly ComputedMaxPeakValue:Variant;
/** * Min peak value based on the ProcessValue. */readonly ComputedMinPeakValue:Variant;
/** * Calculated tendency for new value based on ProcessValue. */readonly ComputedValueTendency:HmiValueTendency;ScaleBackColor:UInt32;ScaleForeColor:UInt32;
/** * Migration Hint: Was ProcessValueIndicatorFont before. */
Font:HmiFontPart;readonly Thresholds:HmiThresholdCollection;Title:HmiTextPart;Label:HmiTextPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model BindingSourceElement. */interface HmiBindingSourceElement extends HmiScreenObjectBase{AutoRequery:boolean;CursorPosition:UInt32;readonly RowCount:UInt32;
/** * If command is executed while already running, the currently running command is completes, the queued commands are deleted and this command is executed. The Completed event is fired for the newest command only. */readonly ReadCommand:HmiCommandPart;readonly ConsideredColumns:HmiConsideredColumnCollection;readonly DataConnection:string;readonly SourceState:HmiSourceState;
/** * @returns void */
MoveFirst():void;
/** * @returns void */
MoveLast():void;
/** * @returns void */
MoveNext():void;
/** * @returns void */
MovePrevious():void;}
/** * Object model BlockSymbolSystem. */interface HmiBlockSymbolSystemPart extends HmiScreenObjectBase{readonly TitleForeColor:UInt32;readonly HeaderForeColor:UInt32;readonly ContentForeColor:UInt32;readonly HeaderBackColor:UInt32;readonly ContentBackColor:UInt32;readonly BorderWidth:UInt8;readonly BorderColor:UInt32;readonly TitleFont:HmiFontPart;readonly HeaderFont:HmiFontPart;readonly ContentFont:HmiFontPart;readonly RenderingTemplate:string;}
/** * Object model Button. */interface HmiButton<ScreenItemName=string>extends HmiScreenItemBase{
/** * HotHeys are unique within a screen. In case of executing a hotkey, the chain is resolved starting from the active (local) window down to the HmiDesktop. */readonly HotKey:UInt16;
/** * Graphic shown while the button is NOT pressed/down. Migration hint: Was "GraphicOn" in Classic. */
Graphic:string;
/** * Text shown while the button is NOT pressed/down. Migration hint: Was "TextOn" in Classic. */
Text:string;
/** * Graphic shown while the button is pressed/down. */
AlternateGraphic:string;
/** * Text shown while the button is pressed/down. */
AlternateText:string;
/** * Color of the button's text. */
ForeColor:UInt32;Font:HmiFontPart;Padding:HmiPaddingPart;Content:HmiContentPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model CheckBoxGroup. */interface HmiCheckBoxGroup<ScreenItemName=string>extends HmiScreenItemBase{ProcessValue:Variant;SelectorPosition:HmiHorizontalAlignment;ForeColor:UInt32;
/** * 0 means auto mode, Item height is caliculated automatically. */
SelectionItemHeight:UInt16;
/** * Entries that form the group. */readonly SelectionItems:HmiSelectionItemCollection;Font:HmiFontPart;Padding:HmiPaddingPart;Content:HmiContentPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model Circle. */interface HmiCircle<ScreenItemName=string>extends HmiScreenItemBase{BorderColor:UInt32;AlternateBorderColor:UInt32;BackColor:UInt32;AlternateBackColor:UInt32;BorderWidth:UInt8;
/** * Pattern applied to the screen item's background. */
BackFillPattern:HmiFillPattern;
/** * Percental value indicating some fill level. */
FillLevel:UInt8;FillDirection:HmiFillDirection;DashType:HmiDashType;ShowFillLevel:boolean;Radius:UInt32;CenterX:Int32;CenterY:Int32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model CircleSegment. */interface HmiCircleSegment<ScreenItemName=string>extends HmiScreenItemBase{
/** * A start angle of 0° corresponds with 3 o'clock. */
StartAngle:Int32;
/** * Clock-wise angle. */
AngleRange:Int32;BorderColor:UInt32;AlternateBorderColor:UInt32;BackColor:UInt32;AlternateBackColor:UInt32;BorderWidth:UInt8;
/** * Pattern applied to the screen item's background. */
BackFillPattern:HmiFillPattern;
/** * Percental value indicating some fill level. */
FillLevel:UInt8;FillDirection:HmiFillDirection;DashType:HmiDashType;ShowFillLevel:boolean;Radius:UInt32;CenterX:Int32;CenterY:Int32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model CircularArc. */interface HmiCircularArc<ScreenItemName=string>extends HmiScreenItemBase{
/** * A start angle of 0° corresponds with 3 o'clock. */
StartAngle:Int32;
/** * Clock-wise angle. */
AngleRange:Int32;LineColor:UInt32;AlternateLineColor:UInt32;DashType:HmiDashType;EndType:HmiLineEndType;StartType:HmiLineEndType;CapType:HmiCapType;LineWidth:UInt8;Radius:UInt32;CenterX:Int32;CenterY:Int32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model Clock. */interface HmiClock<ScreenItemName=string>extends HmiScreenItemBase{
/** * Defines which details of a dial have to be drawn, e.g. only thicks, labels or both. */
DialMode:HmiScaleMode;DialBackColor:UInt32;DialLabelColor:UInt32;DialTickColor:UInt32;
/** * Specifies whether to show the hour-needle or not. */
ShowHours:boolean;
/** * Specifies whether to show the minutes-needle or not. */
ShowMinutes:boolean;
/** * Specifies whether to show the seconds-needle or not. */
ShowSeconds:boolean;
/** * Provides time to be displayed; if not configured client locale time is displayed. Cannot be used to read or even modify a system's actual time, specifies source only. */
TimeSource:Variant;
/** * Sub-Property "TextPosition=LeftOrTop" is interpreted as top, and "TextPosition=RightOrBottom" as bottom. */
Title:HmiTextPart;
/** * Font to be used for the dial. */
DialLabelFont:HmiFontPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model ComboBox. */interface HmiComboBox<ScreenItemName=string>extends HmiScreenItemBase{SelectionMode:HmiSelectionMode;ProcessValue:Variant;SelectorPosition:HmiHorizontalAlignment;ForeColor:UInt32;
/** * 0 means auto mode, Item height is caliculated automatically. */
SelectionItemHeight:UInt16;
/** * Entries that form the group. */readonly SelectionItems:HmiSelectionItemCollection;Font:HmiFontPart;Padding:HmiPaddingPart;Content:HmiContentPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model Command. */interface HmiCommandPart extends HmiScreenObjectBase{readonly CommandText:string;readonly CommandType:string;readonly CommandParameters:HmiParameterCollection;
/** * @returns void */
Execute():void;}
/** * Object model CommandSourceElement. */interface HmiCommandSourceElement extends HmiScreenObjectBase{readonly Command:HmiCommandPart;
/** * Last result from executed command. */readonly ResultSet:HmiParameterCollection;readonly DataConnection:string;readonly SourceState:HmiSourceState;}
/** * Object model ConsideredColumn. */interface HmiConsideredColumnPart extends HmiScreenObjectBase{readonly Key:string;readonly IsPrimary:boolean;}
/** * Object model Content. */interface HmiContentPart extends HmiScreenObjectBase{
/** * Defines ratio of graphic to text (0.7 = 70% space for graphic). */
SplitRatio:Float;
/** * Specifies whether text, graphic or both shall be used for visualization. */
ContentMode:HmiContentMode;
/** * Position of the text in relation to the element's graphic. */
TextPosition:HmiTextPosition;GraphicStretchMode:HmiGraphicStretchMode;VerticalTextAlignment:HmiVerticalAlignment;HorizontalTextAlignment:HmiHorizontalAlignment;
/** * Fix and absolute spacing in between areas spawn by the content split ratio. */
Spacing:UInt32;TextTrimming:HmiTextTrimming;}
/** * Object model ControlBarButton. */interface HmiControlBarButtonPart extends HmiScreenObjectBase{readonly HotKey:UInt16;BackColor:UInt32;AlternateBackColor:UInt32;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;
/** * Usually shows a numerical identicator. */
Badge:HmiBadgePart;Graphic:string;Text:string;Content:HmiContentPart;Visible:boolean;Enabled:boolean;Width:UInt32;Height:UInt32;MinimumWidth:UInt32;MinimumHeight:UInt32;MaximumWidth:UInt32;MaximumHeight:UInt32;ToolTipText:string;
/** * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;ForeColor:UInt32;
/** * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000. */readonly Mapping:Int32;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000. */readonly CustomID:Int32;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Distance to surrounding outside of the control bar element to the controlbar. */
Margin:HmiMarginPart;Padding:HmiPaddingPart;}
/** * Object model ControlBarDisplay. */interface HmiControlBarDisplayPart extends HmiScreenObjectBase{Graphic:string;Text:string;Content:HmiContentPart;Visible:boolean;Enabled:boolean;Width:UInt32;Height:UInt32;MinimumWidth:UInt32;MinimumHeight:UInt32;MaximumWidth:UInt32;MaximumHeight:UInt32;ToolTipText:string;
/** * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;ForeColor:UInt32;
/** * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000. */readonly Mapping:Int32;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000. */readonly CustomID:Int32;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Distance to surrounding outside of the control bar element to the controlbar. */
Margin:HmiMarginPart;Padding:HmiPaddingPart;}
/** * Object model ControlBarLabel. */interface HmiControlBarLabelPart extends HmiScreenObjectBase{Text:string;VerticalTextAlignment:HmiVerticalAlignment;HorizontalTextAlignment:HmiHorizontalAlignment;Visible:boolean;Enabled:boolean;Width:UInt32;Height:UInt32;MinimumWidth:UInt32;MinimumHeight:UInt32;MaximumWidth:UInt32;MaximumHeight:UInt32;ToolTipText:string;
/** * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;ForeColor:UInt32;
/** * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000. */readonly Mapping:Int32;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000. */readonly CustomID:Int32;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Distance to surrounding outside of the control bar element to the controlbar. */
Margin:HmiMarginPart;Padding:HmiPaddingPart;}
/** * Object model ControlBarSeparator. */interface HmiControlBarSeparatorPart extends HmiScreenObjectBase{Visible:boolean;Enabled:boolean;Width:UInt32;Height:UInt32;MinimumWidth:UInt32;MinimumHeight:UInt32;MaximumWidth:UInt32;MaximumHeight:UInt32;ToolTipText:string;
/** * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;ForeColor:UInt32;
/** * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000. */readonly Mapping:Int32;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000. */readonly CustomID:Int32;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Distance to surrounding outside of the control bar element to the controlbar. */
Margin:HmiMarginPart;Padding:HmiPaddingPart;}
/** * Object model ControlBarTextBox. */interface HmiControlBarTextBoxPart extends HmiScreenObjectBase{ReadOnly:boolean;BackColor:UInt32;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;Text:string;VerticalTextAlignment:HmiVerticalAlignment;HorizontalTextAlignment:HmiHorizontalAlignment;Visible:boolean;Enabled:boolean;Width:UInt32;Height:UInt32;MinimumWidth:UInt32;MinimumHeight:UInt32;MaximumWidth:UInt32;MaximumHeight:UInt32;ToolTipText:string;
/** * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;ForeColor:UInt32;
/** * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000. */readonly Mapping:Int32;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000. */readonly CustomID:Int32;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Distance to surrounding outside of the control bar element to the controlbar. */
Margin:HmiMarginPart;Padding:HmiPaddingPart;}
/** * Object model ControlBarToggleSwitch. */interface HmiControlBarToggleSwitchPart extends HmiScreenObjectBase{
/** * Indicator for the switch's state. In a button-like visualization "false" is unpressed. */
IsAlternateState:boolean;AlternateText:string;AlternateGraphic:string;readonly HotKey:UInt16;BackColor:UInt32;AlternateBackColor:UInt32;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;
/** * Usually shows a numerical identicator. */
Badge:HmiBadgePart;Graphic:string;Text:string;Content:HmiContentPart;Visible:boolean;Enabled:boolean;Width:UInt32;Height:UInt32;MinimumWidth:UInt32;MinimumHeight:UInt32;MaximumWidth:UInt32;MaximumHeight:UInt32;ToolTipText:string;
/** * Specifies access control for the tool- or statusbar element. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;ForeColor:UInt32;
/** * Value is taken from an enumeration with IDs for operation, output or input. Applicable enums follow the schema [control-name]ID.[value], such as HmiAlarmControlID.Help. Custom Mapping is always value 0x10000. */readonly Mapping:Int32;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * ID can be used to identify a control bar element, e.g. when triggering a script. Property can also be configured for Mapping!=0x10000. */readonly CustomID:Int32;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Distance to surrounding outside of the control bar element to the controlbar. */
Margin:HmiMarginPart;Padding:HmiPaddingPart;}
/** * Object model Corners. */interface HmiCornersPart extends HmiScreenObjectBase{TopLeftRadius:UInt32;TopRightRadius:UInt32;BottomLeftRadius:UInt32;BottomRightRadius:UInt32;}
/** * Object model CurvedScale. */interface HmiCurvedScalePart extends HmiScreenObjectBase{
/** * The angle where the scale starts. 0 correlates with 3o'clock. The angle is specified clockwise. */
StartAngle:Int32;
/** * The offset angle clock-wise. */
AngleRange:Int32;
/** * The scaling type has influence on the scale (e.g. formatting the labels and ticks in a way it fits to logarithmic scaling), the bar segment as well as markers, indicators, etc. */
ScalingType:HmiScalingType;
/** * Number of primary divisions (in between large ticks). */
DivisionCount:Int32;
/** * Number of secondary divisions (in between small ticks). A division count of 1 does not draw additional smaller ticks. */
SubDivisionCount:Int32;
/** * Defines to which primary tick a label has to be drawn, e.g. 3 would mean the first and every third tick is labeled. */
LargeTickLabelingStep:UInt8;BeginValue:Float;EndValue:Float;
/** * Specifies a format pattern that is applied to scale label's and process value indicators. Migration hint: Replaces "DecimalPlaces" and ShowSignForPositiveLabel" and "UseExponentialFormat". */
OutputFormat:string;LabelFont:HmiFontPart;
/** * Unit comes from Tag (see CHROM Tag Model). */
MeasurementUnitType:HmiMeasurementUnit;
/** * Unit is not shown in axes if multiple trends referencing the same axis are using different measurement units at runtime. */readonly MeasurementUnit:string;AutoScaling:boolean;ScaleMode:HmiScaleMode;LabelColor:UInt32;TickColor:UInt32;}
/** * Object model CustomWebControlContainer. */interface HmiCustomWebControlContainer<ScreenItemName=string,ContainedType=string>extends HmiScreenItemBase{
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * CustomControl-, SwacComponent-, WidgetType. */readonly ContainedType:ContainedType;
/** * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control). */
Properties:HmiDynamicPropertyPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model CustomWidgetContainer. */interface HmiCustomWidgetContainer<ScreenItemName=string>extends HmiScreenItemBase{
/** * In case of custom widget container, this template is provided through the ContainedType property and not by the current style. */readonly RenderingTemplate:string;VisualizeQuality:boolean;
/** * CustomControl-, SwacComponent-, WidgetType. */readonly ContainedType:string;
/** * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control). */
Properties:HmiDynamicPropertyPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model DataCellSystem. */interface HmiDataCellSystemPart extends HmiScreenObjectBase{readonly OutputFormat:string;readonly BackColor:UInt32;readonly ForeColor:UInt32;readonly SelectionBackColor:UInt32;readonly SelectionForeColor:UInt32;readonly Font:HmiFontPart;readonly Content:HmiContentPart;readonly RenderingTemplate:string;}
/** * Object model DataGridColumnHeader. */interface HmiDataGridColumnHeaderPart extends HmiScreenObjectBase{Text:string;Graphic:string;Content:HmiContentPart;}
/** * Object model DataGridColumn. */interface HmiDataGridColumnPart extends HmiScreenObjectBase{
/** * Matches the considered column in binding source "ConsideredColumns" property. */readonly Key:string;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model DataGridControl. */interface HmiDataGridControl<ScreenItemName=string>extends HmiScreenItemBase{readonly BindingSource:HmiBindingSourceElement;
/** * Accepts only columns of type HmiDataGridColumnPart. */
DataGridView:HmiDataGridViewPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;}
/** * Object model DataGridHeaderSettings. */interface HmiDataGridHeaderSettingsPart extends HmiScreenObjectBase{AllowColumnReorder:boolean;AllowColumnResize:boolean;HeaderGridLineColor:UInt32;HeaderForeColor:UInt32;HeaderBackColor:UInt32;HeaderSelectionForeColor:UInt32;HeaderSelectionBackColor:UInt32;RowHeaderType:HmiDataGridHeaderType;ColumnHeaderType:HmiDataGridHeaderType;Font:HmiFontPart;}
/** * Object model DataGridView. */interface HmiDataGridViewPart extends HmiScreenObjectBase{
/** * Specifies whether rows or colums have alternating colors. */
ColoringMode:HmiGridColoringMode;ForeColor:UInt32;BackColor:UInt32;AlternateBackColor:UInt32;AlternateForeColor:UInt32;SelectionForeColor:UInt32;SelectionBackColor:UInt32;SelectFullRow:boolean;GridSelectionMode:HmiGridSelectionMode;HorizontalScrollBarVisibility:HmiScrollBarVisibility;VerticalScrollBarVisibility:HmiScrollBarVisibility;SelectionBorderWidth:UInt8;SelectionBorderColor:UInt32;
/** * Setting this property to true turns all AllowSort properties on the individual columns active (the actual true/false value of the column is used). False disables sorting for all columns (while the column's property value remains). */
AllowSort:boolean;
/** * Unit: DIU. A size of 0 results in auto mode which adapts to the font size and the individual number of lines within a row. No partial rows shall be created. Images will be resized according to a single line. */
RowHeight:UInt8;GridLineColor:UInt32;GridLineWidth:UInt8;GridLineVisibility:HmiSimpleGridLine;AllowFilter:boolean;
/** * Is the font to be used within the table (cells). */
Font:HmiFontPart;HeaderSettings:HmiDataGridHeaderSettingsPart;CellPadding:HmiPaddingPart;
/** * This collection can hold any class derived from HmiDataGridColumnPartbase. Engineering should only configure meaningful columns (e.g. HmiAlarmColumnPart for a complex property "AlarmView"). */readonly Columns:HmiDataGridColumnCollection;}
/** * Object model DataSource. */interface HmiDataSourcePart extends HmiScreenObjectBase{
/** * Accepts (currently) only HmiTag and HmiLoggingTag. */
Source:string;VisualizeQuality:boolean;}
/** * Object model DcsFaceplateContainer. */interface HmiDcsFaceplateContainer<ScreenItemName=string>extends HmiScreenItemBase{readonly DomainTypeGUID:string;readonly DomainSubTypeGUID:string;readonly ContainedType:string;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model DetailedParameterControl. */interface HmiDetailedParameterControl<ScreenItemName=string>extends HmiScreenItemBase{EditMode:HmiEditMode;
/** * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local). */
TimeZone:HmiTimeZone;
/** * If configured, the control won't allow changing the parameter set type. */
ParameterSetTypeFixed:string;ForeColor:UInt32;SelectionBackColor:UInt32;SelectionForeColor:UInt32;CurrentParameterSetTypeID:UInt32;CurrentParameterSetID:UInt32;HideDetails:boolean;
/** * Accepts only columns of type HmiDetailedParameterControlColumnPart. */
ParameterView:HmiDataGridViewPart;
/** * Affects labels and combo boxes within the control. */
Font:HmiFontPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;}
/** * Object model DetailedParameterControlColumn. */interface HmiDetailedParameterControlColumnPart extends HmiScreenObjectBase{DetailedParameterControlBlock:HmiDetailedParameterControlBlock;
/** * Matches the considered column in binding source "ConsideredColumns" property. */readonly Key:string;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model DotNetControlContainer. */interface HmiDotNetControlContainer<ScreenItemName=string>extends HmiScreenItemBase{
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * CustomControl-, SwacComponent-, WidgetType. */readonly ContainedType:string;
/** * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control). */
Properties:HmiDynamicPropertyPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model DynamicProperty. */interface HmiDynamicPropertyPart extends HmiScreenObjectBase{}
/** * Object model Ellipse. */interface HmiEllipse<ScreenItemName=string>extends HmiScreenItemBase{BorderColor:UInt32;AlternateBorderColor:UInt32;BackColor:UInt32;AlternateBackColor:UInt32;BorderWidth:UInt8;
/** * Pattern applied to the screen item's background. */
BackFillPattern:HmiFillPattern;
/** * Percental value indicating some fill level. */
FillLevel:UInt8;FillDirection:HmiFillDirection;DashType:HmiDashType;ShowFillLevel:boolean;RadiusX:UInt32;RadiusY:UInt32;CenterX:Int32;CenterY:Int32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model EllipseSegment. */interface HmiEllipseSegment<ScreenItemName=string>extends HmiScreenItemBase{
/** * A start angle of 0° corresponds with 3 o'clock. */
StartAngle:Int32;
/** * Clock-wise angle. */
AngleRange:Int32;BorderColor:UInt32;AlternateBorderColor:UInt32;BackColor:UInt32;AlternateBackColor:UInt32;BorderWidth:UInt8;
/** * Pattern applied to the screen item's background. */
BackFillPattern:HmiFillPattern;
/** * Percental value indicating some fill level. */
FillLevel:UInt8;FillDirection:HmiFillDirection;DashType:HmiDashType;ShowFillLevel:boolean;RadiusX:UInt32;RadiusY:UInt32;CenterX:Int32;CenterY:Int32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model EllipticalArc. */interface HmiEllipticalArc<ScreenItemName=string>extends HmiScreenItemBase{
/** * A start angle of 0° corresponds with 3 o'clock. */
StartAngle:Int32;
/** * Clock-wise angle. */
AngleRange:Int32;LineColor:UInt32;AlternateLineColor:UInt32;DashType:HmiDashType;EndType:HmiLineEndType;StartType:HmiLineEndType;CapType:HmiCapType;LineWidth:UInt8;RadiusX:UInt32;RadiusY:UInt32;CenterX:Int32;CenterY:Int32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model FaceplateContainer. */interface HmiFaceplateContainer<ScreenItemName=string>extends HmiScreenItemBase{
/** * Specifies whether the faceplate is currently visible. */readonly IsVisible:boolean;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;
/** * Defining the zoom factor for the faceplate container, which may differ from the zoom factor of the contained faceplate. The default is 1.0 representing an unzoomed (100%). */
CurrentZoomFactor:Float;
/** * Specifies the mode when to show the vertical scroll bar. */
VerticalScrollBarVisibility:HmiScrollBarVisibility;
/** * Specifies the vertical position of the faceplate within the faceplate container in DIU. */
VerticalScrollBarPosition:Int32;
/** * Specifies the mode when to show the horizontal scroll bar. */
HorizontalScrollBarVisibility:HmiScrollBarVisibility;
/** * Specifies the horizontal position of the faceplate within the faceplate container in DIU. */
HorizontalScrollBarPosition:Int32;
/** * Specifies whether the faceplate or container window shall adapt its size. */
Adaption:HmiScreenWindowAdaption;
/** * States whether zooming is allowed (‘InteractiveZooming’ = true) or not for this faceplate container. */
InteractiveZooming:boolean;
/** * CustomControl-, SwacComponent-, WidgetType. */readonly ContainedType:string;
/** * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control). */
Properties:HmiDynamicPropertyPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model FaceplateType. */interface HmiFaceplateType extends HMIFaceplateInterface{
/** * Points to the screen item (currently button only) that hast to be pressed for an explicit operation. */readonly EnableExplicitUnlock:HmiButton;
/** * Defines if the faceplate instance can be suspended if it is currently not visible. */readonly Suspendable:boolean;Properties:HmiDynamicPropertyPart;
/** * States whether the screen is operable at all (‘Enabled’ = true) or not. If not, the screen appears read-only if visible, independend from the user authorization. Applies for entsire screen and all contained objects. */
Enabled:boolean;
/** * Specifies the dimensions of the screen in device-independend units (DIU). */
Width:UInt32;
/** * Specifies the dimensions of the screen in device-independend units (DIU). . */
Height:UInt32;
/** * Specifyies the background fill pattern of the screen. The pattern is always shown behind the graphic. */
BackFillPattern:HmiFillPattern;
/** * Primary color of the screen's background. */
BackColor:UInt32;
/** * Secondary color of the screen's background to be used in FillPattern. */
AlternateBackColor:UInt32;
/** * Graphic to be shown in the screen's background. */
BackGraphic:string;
/** * The initial position of screen is defined through the current scrollbar position of the parent Hmi(TopLevel)ScreenWindow If an screen is smaller than its parent window, this alignment is used for positioning. */
HorizontalAlignment:HmiHorizontalAlignment;
/** * The initial position of screen is defined through the current scrollbar position of the parent Hmi(TopLevel)ScreenWindow If an screen is smaller than its parent window, this alignment is used for positioning. */
VerticalAlignment:HmiVerticalAlignment;
/** * Specifies if the background fills just the screen or the entire window's view. */
BackgroundFillMode:HmiBackgroundFillMode;
/** * Specifies how the backgraphic is stretched. */
BackGraphicStretchMode:HmiGraphicStretchMode;readonly Name:string;DisplayName:string;readonly Layers:HmiLayerCollection;}
/** * Object model FlowLineDecoratorSystem. */interface HmiFlowLineDecoratorSystemPart extends HmiScreenObjectBase{readonly ForeColor:UInt32;readonly BackColor:UInt32;readonly Font:HmiFontPart;readonly RenderingTemplate:string;}
/** * Object model FocusEffectSystem. */interface HmiFocusEffectSystemPart extends HmiScreenObjectBase{FocusColor:UInt32;LineWidth:UInt8;readonly RenderingTemplate:string;}
/** * Object model Font. */interface HmiFontPart extends HmiScreenObjectBase{Weight:HmiFontWeight;Name:string;Italic:boolean;
/** * Font size unit is: DIU. */
Size:Float;Underline:boolean;StrikeOut:HmiFontStrikeOut;}
/** * Object model FunctionTrendArea. */interface HmiFunctionTrendAreaPart extends HmiScreenObjectBase{SelectedFunctionTrend:HmiFunctionTrendPart;readonly TopValueAxes:HmiXValueAxisCollection;readonly BottomValueAxes:HmiXValueAxisCollection;readonly FunctionTrends:HmiFunctionTrendCollection;
/** * Is used as key for the graph area. */
Name:string;Visible:boolean;BackColor:UInt32;
/** * Grid lines are always shown for the area's inner axes (that's the axis with index=0 in the parts arrays). */
GridLines:HmiGridLine;MajorGridLinesColor:UInt32;MinorGridLinesColor:UInt32;
/** * The TrendControl will set the areas proportional to their individual HeightFactors. */
SizeFactor:UInt16;
/** * Defines the appearance of the ruler in this area. */
Ruler:HmiRulerPart;readonly LeftValueAxes:HmiYValueAxisCollection;readonly RightValueAxes:HmiYValueAxisCollection;}
/** * Object model FunctionTrendControl. */interface HmiFunctionTrendControl<ScreenItemName=string>extends HmiScreenItemBase{readonly FunctionTrendAreas:HmiFunctionTrendAreaCollection;
/** * The space between TrendAreas. There is no such property for Comfort since there is always just exactly one area. */
AreaSpacing:UInt16;
/** * Online = Diagram is updated with new values, Offline = Diagram is frozen, no new values are added. */
Online:boolean;ExtendRulerToAxis:boolean;ShowRuler:boolean;ShiftAxes:boolean;Legend:HmiLegendPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * Removes the user changes in the TrendControl from the user profile service. * @param Scope * @returns void */
ResetUserProfile(Scope:object):void;
/** * Persists the user changes in the TrendControl in the user profile service. * @param Scope * @returns void */
SaveUserProfile(Scope:object):void;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;}
/** * Object model FunctionTrend. */interface HmiFunctionTrendPart extends HmiScreenObjectBase{RangeType:HmiTimeRangeType;TimeRangeFactor:Int32;TimeRangeBase:HmiTimeRangeBase;BeginTime:DateTime;EndTime:DateTime;PointCount:Int32;XValueAxis:HmiXValueAxisPart;TrendMode:HmiTrendMode;DataSourceX:HmiDataSourcePart;Visible:boolean;DisplayName:string;DashType:HmiDashType;LineWidth:UInt8;LineColor:UInt32;BackFillPattern:HmiFillPattern;BackColor:UInt32;AlternateBackColor:UInt32;MarkerType:HmiMarkerType;MarkerDimension:UInt32;MarkerColor:UInt32;MarkerGraphic:string;
/** * Only relevant for historical data. False means starting from current time. True means data is requested for the complete visible area. */
ShowLoggedDataImmediately:boolean;YValueAxis:HmiYValueAxisPart;
/** * If Limit colors are defined and quality is uncertain with RangeViolation, colors defined in this part are ignored. */
QualityVisualization:HmiQualityPart;
/** * Applies for Y-axis only. */readonly Thresholds:HmiThresholdCollection;DataSourceY:HmiDataSourcePart;}
/** * Object model Gauge. */interface HmiGauge<ScreenItemName=string>extends HmiScreenItemBase{CurvedScale:HmiCurvedScalePart;ProcessValue:Variant;
/** * Specifies how to illustrate limit indicators. Migration hint: Combines old properties "ShowLimitLines", "ShowLimitMarkers", etc. */
ThresholdIndicators:HmiThresholdIndicator;
/** * The trend Indicator itself is part of the rendering template (e.g. an arrow up/down) and will be shown if latest value was higher/lower than the previous one. */
ShowTrendIndicator:boolean;TrendIndicatorColor:UInt32;
/** * Used for ProcessIndicator or for Bar in SegementedStatic. */
ProcessValueIndicatorForeColor:UInt32;ProcessValueIndicatorBackColor:UInt32;
/** * Defines the visual representation of indicator for the current process value. */
ProcessValueIndicatorMode:HmiProcessIndicatorMode;
/** * Migration hint: Known as "StartValue". */
OriginValue:Float;
/** * States whether the origin value is an absolute value or if the origin is calculated from a percental declaration between minimum and maximum value. */
RelativeToOrigin:boolean;
/** * Defines whether indicators for the highest/lowest value seen have to be shown. ("Schleppzeiger"). */
PeakIndicators:HmiPeakIndicator;OutputFormat:string;NormalRangeColor:UInt32;
/** * Max peak value based on the ProcessValue. */readonly ComputedMaxPeakValue:Variant;
/** * Min peak value based on the ProcessValue. */readonly ComputedMinPeakValue:Variant;
/** * Calculated tendency for new value based on ProcessValue. */readonly ComputedValueTendency:HmiValueTendency;ScaleBackColor:UInt32;ScaleForeColor:UInt32;
/** * Migration Hint: Was ProcessValueIndicatorFont before. */
Font:HmiFontPart;readonly Thresholds:HmiThresholdCollection;Title:HmiTextPart;Label:HmiTextPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model GraphicView. */interface HmiGraphicView<ScreenItemName=string>extends HmiScreenItemBase{GraphicStretchMode:HmiGraphicStretchMode;Graphic:string;
/** * Percental value indicating some fill level. */
FillLevel:UInt8;
/** * Specifies the direction the fill level will be drawn, usually from bottom to top. */
FillDirection:HmiFillDirection;
/** * Some part of the screen item's area (usually the background) will be filled according to the FillLevel property. */
ShowFillLevel:boolean;
/** * Pattern applied to the screen item's background. */
BackFillPattern:HmiFillPattern;BackColor:UInt32;AlternateBackColor:UInt32;
/** * Specifies the distance between the contained graphic and the border. */
Padding:HmiPaddingPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model GraphOverviewControlColumn. */interface HmiGraphOverviewControlColumnPart extends HmiScreenObjectBase{GraphOverviewControlBlock:HmiGraphOverviewBlock;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model Group. */interface HmiGroup<ScreenItemName=string>extends HmiScreenItemBase{Properties:HmiDynamicPropertyPart;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;
/** * Array of references to contained items. */readonly ContainedItems:ArrayOfSomRef;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model HeaderCellSystem. */interface HmiHeaderCellSystemPart extends HmiScreenObjectBase{readonly Text:string;readonly Graphic:string;readonly ForeColor:UInt32;readonly BackColor:UInt32;readonly SelectionForeColor:UInt32;readonly SelectionBackColor:UInt32;readonly SortOrder:UInt16;readonly SortDirection:HmiSortDirection;readonly AllowSort:boolean;readonly Name:string;readonly Font:HmiFontPart;readonly Content:HmiContentPart;readonly RenderingTemplate:string;}
/** * Object model HelpLine. */interface HmiHelpLinePart extends HmiScreenObjectBase{Visible:boolean;Value:Float;}
/** * Object model HotKey. */interface HmiHotKeyPart extends HmiScreenObjectBase{HotKey:UInt16;}
/** * Object model InputBehavior. */interface HmiInputBehaviorPart extends HmiScreenObjectBase{
/** * Value is written to ProcessValue once the screen item loses its focus. */
AcceptOnDeactivated:boolean;
/** * On focus the last value will be cleared. */
ClearOnActivate:boolean;
/** * Specifies whether the IOField accepts input while showing * (usefull for passwords). */
HiddenInput:boolean;
/** * Specifies whether the IOField accepts input when it gets the focus. */
InputOnActivate:boolean;}
/** * Object model InputHintSystem. */interface HmiInputHintSystemPart extends HmiScreenObjectBase{readonly RenderingTemplate:string;}
/** * Object model IOField. */interface HmiIOField<ScreenItemName=string>extends HmiScreenItemBase{ProcessValue:Variant;
/** * Migration hint: Classic specified property "Mode" only. TwoState mode was removed. */
IOFieldType:HmiIOFieldType;
/** * Describes how the IOField's value will be formatted for display. Migration hint: Leading zeros as format pattern. Also previous properties "DecimalPlaces" and "DataFormat" (binary, hex, etc.) replaced are replaced by this pattern. */
OutputFormat:string;VerticalTextAlignment:HmiVerticalAlignment;HorizontalTextAlignment:HmiHorizontalAlignment;TextTrimming:HmiTextTrimming;readonly Thresholds:HmiThresholdCollection;InputBehavior:HmiInputBehaviorPart;
/** * Unit comes from Tag (see CHROM Tag Model). */
MeasurementUnitType:HmiMeasurementUnit;
/** * Unit is not shown in axes if multiple trends referencing the same axis are using different measurement units at runtime. */readonly MeasurementUnit:string;
/** * Color of the text in the widget. */
ForeColor:UInt32;Font:HmiFontPart;Padding:HmiPaddingPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model Label. */interface HmiLabel<ScreenItemName=string>extends HmiScreenItemBase{Text:string;
/** * Specifies whether lines shall be wrapped in case of not enough screen item width. */
TextWrapping:HmiTextWrapping;VerticalTextAlignment:HmiVerticalAlignment;HorizontalTextAlignment:HmiHorizontalAlignment;TextTrimming:HmiTextTrimming;
/** * Color of the text in the widget. */
ForeColor:UInt32;Font:HmiFontPart;Padding:HmiPaddingPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model Layer. */interface HmiLayerPart extends HmiScreenObjectBase{
/** * Stating whether screen items of a corresponding screen layer are visible or hidden. At runtime, turning off and on screen layers is required for the feature of decluttering, which depends on zooming. */
Visible:boolean;
/** * Defines part of the range, for which the respective screen layer shall be visible or hidden. */
MaximumZoom:Float;
/** * Defines part of the range, for which the respective screen layer shall be visible or hidden. */
MinimumZoom:Float;
/** * Configured name of the Layer. */readonly Name:string;}
/** * Object model Legend. */interface HmiLegendPart extends HmiScreenObjectBase{Visible:boolean;ForeColor:UInt32;Font:HmiFontPart;}
/** * Object model Line. */interface HmiLine<ScreenItemName=string>extends HmiScreenItemBase{
/** * Relative to surface, not screen. */
X1:Int32;
/** * Relative to surface, not screen. */
Y1:Int32;
/** * Relative to surface, not screen. */
X2:Int32;
/** * Relative to surface, not screen. */
Y2:Int32;LineColor:UInt32;AlternateLineColor:UInt32;DashType:HmiDashType;EndType:HmiLineEndType;StartType:HmiLineEndType;CapType:HmiCapType;LineWidth:UInt8;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model LineColor. */interface HmiLineColorPart extends HmiScreenObjectBase{readonly NormalLine:UInt32;readonly ActiveLine:UInt32;readonly InactiveLine:UInt32;}
/** * Object model ListBox. */interface HmiListBox<ScreenItemName=string>extends HmiScreenItemBase{SelectionMode:HmiSelectionMode;ProcessValue:Variant;SelectorPosition:HmiHorizontalAlignment;ForeColor:UInt32;
/** * 0 means auto mode, Item height is caliculated automatically. */
SelectionItemHeight:UInt16;
/** * Entries that form the group. */readonly SelectionItems:HmiSelectionItemCollection;Font:HmiFontPart;Padding:HmiPaddingPart;Content:HmiContentPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model ListContainerSystem. */interface HmiListContainerSystemPart extends HmiScreenObjectBase{readonly List:HmiDynamicPropertyCollection;readonly Current:HmiDynamicPropertyPart;readonly RenderingTemplate:string;}
/** * Object model LogicSymbolSystem. */interface HmiLogicSymbolSystemPart extends HmiScreenObjectBase{readonly HeaderForeColor:UInt32;readonly ContentForeColor:UInt32;readonly HeaderBackColor:UInt32;readonly ContentBackColor:UInt32;readonly LogicSymbolColor:UInt32;readonly LogicSymbolLineType:HmiDashType;readonly HeaderFont:HmiFontPart;readonly ContentFont:HmiFontPart;readonly RenderingTemplate:string;}
/** * Object model Margin. */interface HmiMarginPart extends HmiScreenObjectBase{Top:Int32;Left:Int32;Bottom:Int32;Right:Int32;}
/** * Object model MarkerSystem. */interface HmiMarkerSystemPart extends HmiScreenObjectBase{readonly MeasurementUnit:string;readonly BackColor:UInt32;readonly ForeColor:UInt32;readonly Thresholds:HmiThresholdPart;readonly Font:HmiFontPart;readonly RenderingTemplate:string;}
/** * Object model MatrixView. */interface HmiMatrixViewPart extends HmiScreenObjectBase{TileBorderWidth:UInt8;TileHeightMin:UInt16;TileHeightMax:UInt16;TileWidthMin:UInt16;TileWidthMax:UInt16;readonly HardwareDetails:HmiSystemDiagnosisHardwareDetailCollection;SystemDiagnosisHardwareDetailView:HmiSystemDiagnosisDetailViewPart;}
/** * Object model MediaControl. */interface HmiMediaControl<ScreenItemName=string>extends HmiScreenItemBase{
/** * Source of the media to be played (e.g. network, file ressource or camera). */
Url:string;AutoPlay:boolean;VideoOutput:HmiVideoOutput;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;
/** * @returns void */
Pause():void;
/** * @returns void */
Play():void;
/** * @returns void */
Stop():void;}
/** * Object model ObjectExplorerControl. */interface HmiObjectExplorerControl<ScreenItemName=string>extends HmiScreenItemBase{DisplayViewType:HmiDisplayViewType;TargetObjectType:UInt32;
/** * References an advanced control that is related to the object picker (usually the creator of the screen item at runtime). */
LinkedItem:HmiControlWindowBase;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;}
/** * Object model OpenLinkElement. */interface HmiOpenLinkElement extends HmiScreenObjectBase{readonly OpenLinkMode:HmiOpenLinkMode;readonly ActiveOnStartup:boolean;Pipe:HmiPipePart;Application:HmiApplicationPart;
/** * CustomControl-, SwacComponent-, WidgetType. */readonly ContainedType:string;
/** * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control). */
Properties:HmiDynamicPropertyPart;
/** * @returns void */
Start():void;
/** * @returns void */
Stop():void;}
/** * Object model Operability. */interface HmiOperabilityPart extends HmiScreenObjectBase{
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;}
/** * Object model OverviewParameterControl. */interface HmiOverviewParameterControl<ScreenItemName=string>extends HmiScreenItemBase{EditMode:HmiEditMode;TimeZone:HmiTimeZone;
/** * The specification of the filter syntax is defined in SDS CHROM General (please refer to "Query Language" chapter 4.1.4). An additional object model that allows to be mapped onto a filter string is currently an open issue. */
Filter:string;ParameterSetTypeDefault:string;DetailedParameterControl:HmiDetailedParameterControl;
/** * Accepts only columns of type HmiOverviewParameterControlColumnPart. */
ParameterView:HmiDataGridViewPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;}
/** * Object model OverviewParameterControlColumn. */interface HmiOverviewParameterControlColumnPart extends HmiScreenObjectBase{OverviewParameterControlBlock:HmiOverviewParameterControlBlock;
/** * Matches the considered column in binding source "ConsideredColumns" property. */readonly Key:string;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model Padding. */interface HmiPaddingPart extends HmiScreenObjectBase{Top:Int32;Left:Int32;Right:Int32;Bottom:Int32;}
/** * Object model Parameter. */interface HmiParameterPart extends HmiScreenObjectBase{ParameterName:string;ParameterValue:Variant;}
/** * Object model Pipe. */interface HmiPipePart extends HmiScreenObjectBase{readonly PipeState:HmiPipeConnectionState;readonly PipeName:string;
/** * Result of last property read or write operation. */readonly LastPropertyRequestResult:HmiRequestResult;readonly ReconnectAutomatically:boolean;CharSet:HmiCharSet;}
/** * Object model PlcDataSource. */interface HmiPlcDataSourcePart extends HmiScreenObjectBase{
/** * References the HmiTag used for PDiag. */readonly Tag:TagName;
/** * References the HmiConnection for Tag. Will be set by ES when Tag is set. */readonly Connection:ConnectionName;
/** * Name of the DB used by the Tag. Will be set by ES when Tag is set. */
DB_Name:string;HmiConnectionName:ConnectionName;}
/** * Object model Polygon. */interface HmiPolygon<ScreenItemName=string>extends HmiScreenItemBase{BorderColor:UInt32;AlternateBorderColor:UInt32;BackColor:UInt32;AlternateBackColor:UInt32;BorderWidth:UInt8;
/** * Pattern applied to the screen item's background. */
BackFillPattern:HmiFillPattern;
/** * Percental value indicating some fill level. */
FillLevel:UInt8;FillDirection:HmiFillDirection;DashType:HmiDashType;ShowFillLevel:boolean;JoinType:HmiLineJoinType;Points:Variant;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model Polyline. */interface HmiPolyline<ScreenItemName=string>extends HmiScreenItemBase{LineColor:UInt32;AlternateLineColor:UInt32;DashType:HmiDashType;EndType:HmiLineEndType;StartType:HmiLineEndType;CapType:HmiCapType;LineWidth:UInt8;JoinType:HmiLineJoinType;Points:Variant;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model PopupScreenWindow. */interface HmiPopupScreenWindow<ScreenItemName=string>extends HmiScreenItemBase,HMIScreenWindowInterface{readonly IsModal:boolean;
/** * Iidentifying the monitor in a multi-monitor configuration. */readonly Monitor:UInt8;
/** * Specifies the startup position of the screen window. In case of value 'none' the window is positioned relative to the configured Monitor via Left and Top property. Migration hint: Was "WindowStartupPosition" in Classic. */
StartupPosition:HmiWindowStartupPosition;TabIntoWindow:boolean;
/** * Reference to a screen to be shown in the screen window. */
Screen:string;
/** * Name is taken from the current screen when read. (For activation Name has to be known via CNS.). */readonly ScreenName:string;
/** * Number is taken from the current screen when read. (For activation Number has to be known via CNS.). */readonly ScreenNumber:UInt16;
/** * Specifies the server prefix. */
System:string;
/** * Defining the zoom factor for the screen window, which may differ from the zoom factor of the contained screen. The default is 1.0 representing an unzoomed (100%). */
CurrentZoomFactor:Float;
/** * Defines the screen position in the screen window. */
VerticalScrollBarVisibility:HmiScrollBarVisibility;
/** * Specifies the vertical position of the screen within the screen window in DIU. */
VerticalScrollBarPosition:Int32;
/** * Defines the screen position in the screen window. */
HorizontalScrollBarVisibility:HmiScrollBarVisibility;
/** * Specifies the horizontal position of the screen within the screen window in DIU. */
HorizontalScrollBarPosition:Int32;
/** * Specifies whether the screen or screen window shall adapt its size. */
Adaption:HmiScreenWindowAdaption;
/** * States whether zooming is allowed (‘InteractiveZooming’ = true) or not for this screen window. */
InteractiveZooming:boolean;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model ProcessColumn. */interface HmiProcessColumnPart extends HmiScreenObjectBase{DataSource:HmiDataSourcePart;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model ProcessControl. */interface HmiProcessControl<ScreenItemName=string>extends HmiScreenItemBase{Online:boolean;
/** * Used as kind of smoothing together with Factor. Results within this range will be shown in the same row. */
TimeStepSmoothingBase:HmiTimeRangeBase;
/** * Used as kind of smoothing together with Base. Results within this range will be shown in the same row. */
TimeStepSmoothingFactor:Int32;EditMode:HmiEditMode;
/** * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local). */
TimeZone:HmiTimeZone;
/** * Accepts exactly one column of type HmiTimeRangeColumnPart and multiple HmiProcessColumnPart. */
ProcessView:HmiDataGridViewPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;}
/** * Object model ProcessDiagnosisCriteriaAnalysisControl. */interface HmiProcessDiagnosisCriteriaAnalysisControl<ScreenItemName=string>extends HmiScreenItemBase{readonly SourceControl:HmiAlarmControl;ForeColor:UInt32;
/** * Accepts only columns of type HmiProcessDiagnosisCriteriaAnalysisControlColumn. */
CriteriaAnalysisView:HmiDataGridViewPart;SnapToSourceControl:boolean;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;}
/** * Object model ProcessDiagnosisCriteriaAnalysisControlColumn. */interface HmiProcessDiagnosisCriteriaAnalysisControlColumnPart extends HmiScreenObjectBase{readonly CriteriaAnalysisBlock:HmiProcessDiagnosisCriteriaAnalysisBlock;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model ProcessDiagnosisGraphOverviewControl. */interface HmiProcessDiagnosisGraphOverviewControl<ScreenItemName=string>extends HmiScreenItemBase{ShowOperationMode:boolean;ForeColor:UInt32;GridLineColor:UInt32;SelectedStep:UInt16;PlcSource:HmiPlcDataSourcePart;OperationMode:HmiProcessDiagnosisOperationModePart;Font:HmiFontPart;
/** * Accepts only columns of type HmiGraphOverviewControlColumnPart. */
GraphOverview:HmiDataGridViewPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;
/** * @param PLCName * @param Block * @returns void */
SetProcessConnection(PLCName:string,Block:string):void;}
/** * Object model ProcessDiagnosisOperationMode. */interface HmiProcessDiagnosisOperationModePart extends HmiScreenObjectBase{OpModeAutoText:string;OpModeManText:string;OpModeTapText:string;OpModeTopText:string;}
/** * Object model ProcessDiagnosisOverviewControl. */interface HmiProcessDiagnosisOverviewControl<ScreenItemName=string>extends HmiScreenItemBase{ForeColor:UInt32;LineColor:UInt32;PlcSource:HmiPlcDataSourcePart;PDiagCategories:HmiProcessDiagnosisOverviewPart;PDiagSupervisionTypes:HmiProcessDiagnosisOverviewPart;Font:HmiFontPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;
/** * @param PLCName * @param Block * @returns void */
SetProcessConnection(PLCName:string,Block:string):void;}
/** * Object model ProcessDiagnosisOverviewElement. */interface HmiProcessDiagnosisOverviewElementPart extends HmiScreenObjectBase{Text:string;ForeColor:UInt32;BackColor:UInt32;Visible:boolean;FlashingRate:HmiFlashingRate;AlternateBackColor:UInt32;AlternateForeColor:UInt32;}
/** * Object model ProcessDiagnosisOverview. */interface HmiProcessDiagnosisOverviewPart extends HmiScreenObjectBase{Visible:boolean;readonly PDiagElements:HmiProcessDiagnosisOverviewElementCollection;SymbolFont:HmiFontPart;Label:HmiTextPart;}
/** * Object model ProcessDiagnosisPlcCodeViewerControl. */interface HmiProcessDiagnosisPlcCodeViewerControl<ScreenItemName=string>extends HmiScreenItemBase{ShowSymbolLine:boolean;OverviewDetailRatio:Float;SymbolLineBackColor:UInt32;SymbolLineForeColor:UInt32;CurrentZoomFactor:Float;SymbolLineFont:HmiFontPart;readonly LineColors:HmiLineColorPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;
/** * @returns void */
Next():void;
/** * @param HmiConnectionName * @param CpuAlarmID * @param TextlistIndex * @returns void */
OpenCodeViewerFromAlarm(HmiConnectionName:ConnectionName,CpuAlarmID:HMIUint64,TextlistIndex:HMIUint64):void;
/** * @param HmiConnectionName * @param CpuAlarmID * @param TextlistIndex * @param ProducerID * @param StepNumber * @param InitialValues * @param SupervisionToBit * @returns void */
OpenCodeViewerFromAlarmWithCA(HmiConnectionName:ConnectionName,CpuAlarmID:HMIUint64,TextlistIndex:HMIUint64,ProducerID:UInt32,StepNumber:UInt16,InitialValues:UInt32,SupervisionToBit:boolean):void;
/** * @param PlcName * @param Block * @param StepNumber * @returns void */
OpenGRAPHDetails(PlcName:string,Block:string,StepNumber:UInt16):void;
/** * @param HmiConnectionName * @param Block * @param StepNumber * @returns void */
OpenGRAPHDetailsByConnectionName(HmiConnectionName:ConnectionName,Block:string,StepNumber:UInt16):void;
/** * @param PlcName * @param ContainingBlock * @param CallBlock * @param Pin * @param PinSubstringSearch * @returns void */
OpenProDiagDetailsFB(PlcName:string,ContainingBlock:string,CallBlock:string,Pin:string,PinSubstringSearch:boolean):void;
/** * @param PlcName * @param ContainingBlock * @param CallBlock * @param Pin * @param UdtInstance * @param PinSubstringSearch * @returns void */
OpenProDiagDetailsFC(PlcName:string,ContainingBlock:string,CallBlock:string,Pin:string,UdtInstance:string,PinSubstringSearch:boolean):void;
/** * @param PlcName * @param ContainingBlock * @param Operand * @returns void */
OpenProDiagDetailsNetwork(PlcName:string,ContainingBlock:string,Operand:string):void;
/** * @returns void */
Previous():void;
/** * @returns void */
ResetToConfiguration():void;
/** * @returns void */
ToggleCriteriaAnalysis():void;
/** * @returns void */
ToggleGRAPHViewerMode():void;
/** * @returns void */
ToggleNetworkDisplay():void;
/** * @returns void */
ZoomIn():void;
/** * @returns void */
ZoomOut():void;}
/** * Object model Quality. */interface HmiQualityPart extends HmiScreenObjectBase{Visible:boolean;BadColor:UInt32;UncertainColor:UInt32;}
/** * Object model RadioButtonGroup. */interface HmiRadioButtonGroup<ScreenItemName=string>extends HmiScreenItemBase{ProcessValue:Variant;SelectorPosition:HmiHorizontalAlignment;ForeColor:UInt32;
/** * 0 means auto mode, Item height is caliculated automatically. */
SelectionItemHeight:UInt16;
/** * Entries that form the group. */readonly SelectionItems:HmiSelectionItemCollection;Font:HmiFontPart;Padding:HmiPaddingPart;Content:HmiContentPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model Rectangle. */interface HmiRectangle<ScreenItemName=string>extends HmiScreenItemBase{
/** * Specifies if and to which degree the corners of the rectangle shall be round. */
Corners:HmiCornersPart;BorderColor:UInt32;AlternateBorderColor:UInt32;BackColor:UInt32;AlternateBackColor:UInt32;BorderWidth:UInt8;
/** * Pattern applied to the screen item's background. */
BackFillPattern:HmiFillPattern;
/** * Percental value indicating some fill level. */
FillLevel:UInt8;FillDirection:HmiFillDirection;DashType:HmiDashType;ShowFillLevel:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model ResourceListEntry. */interface HmiResourceListEntryPart extends HmiScreenObjectBase{readonly ResourceListType:HmiResourceListType;readonly Text:string;readonly Graphic:string;}
/** * Object model RulerIndicatorSystem. */interface HmiRulerIndicatorSystemPart extends HmiScreenObjectBase{BackColor:UInt32;ForeColor:UInt32;OutputFormat:string;Font:HmiFontPart;readonly RenderingTemplate:string;}
/** * Object model Ruler. */interface HmiRulerPart extends HmiScreenObjectBase{Width:UInt32;Color:UInt32;}
/** * Object model ScalingEntry. */interface HmiScalingEntryPart extends HmiScreenObjectBase{BeginValue:Float;EndValue:Float;BeginValueTarget:Float;EndValueTarget:Float;DisplayName:string;}
/** * Object model Screen. */interface HmiScreen extends HMIScreenInterface{
/** * Configured number of the screen. This property is not system-defined but configured by the user. This property has to be written into the screen hierarchy (mapping from number to CHROM ID) and is not written into the screen's RDF!. */readonly ScreenNumber:UInt16;
/** * Reference to a screen template, from which this screen inherits aspects such as HmiScreenItems, HmiScreenLayers and HmiProperties. */
ScreenMaster:HmiScreenMaster;
/** * Points to the screen item (currently button only) that hast to be pressed for an explicit operation. */readonly EnableExplicitUnlock:HmiButton;
/** * [DCS+ Engineering only] Specifies access control for the screen. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Specifies the left offset of the screen in its screen window. */
OffsetLeft:Int32;
/** * Specifies the top offset of the screen in its screen window. */
OffsetTop:Int32;
/** * States whether the screen is operable at all (‘Enabled’ = true) or not. If not, the screen appears read-only if visible, independend from the user authorization. Applies for entsire screen and all contained objects. */
Enabled:boolean;
/** * Specifies the dimensions of the screen in device-independend units (DIU). */
Width:UInt32;
/** * Specifies the dimensions of the screen in device-independend units (DIU). . */
Height:UInt32;
/** * Specifyies the background fill pattern of the screen. The pattern is always shown behind the graphic. */
BackFillPattern:HmiFillPattern;
/** * Primary color of the screen's background. */
BackColor:UInt32;
/** * Secondary color of the screen's background to be used in FillPattern. */
AlternateBackColor:UInt32;
/** * Graphic to be shown in the screen's background. */
BackGraphic:string;
/** * The initial position of screen is defined through the current scrollbar position of the parent Hmi(TopLevel)ScreenWindow If an screen is smaller than its parent window, this alignment is used for positioning. */
HorizontalAlignment:HmiHorizontalAlignment;
/** * The initial position of screen is defined through the current scrollbar position of the parent Hmi(TopLevel)ScreenWindow If an screen is smaller than its parent window, this alignment is used for positioning. */
VerticalAlignment:HmiVerticalAlignment;
/** * Specifies if the background fills just the screen or the entire window's view. */
BackgroundFillMode:HmiBackgroundFillMode;
/** * Specifies how the backgraphic is stretched. */
BackGraphicStretchMode:HmiGraphicStretchMode;readonly Name:string;DisplayName:string;readonly Layers:HmiLayerCollection;}
/** * Object model ScreenMaster. */interface HmiScreenMaster extends HmiScreenItemBase{
/** * Indicates if the screen items of the screen template are visible or hidden. You may consider the screen master as a dedicated “screen layer”: attribute ‘Visible’ controls the visibility of the screen’s “screen master layer”. */
Visible:boolean;readonly Name:string;DisplayName:string;readonly Layers:HmiLayerCollection;}
/** * Object model ScreenWindow. */interface HmiScreenWindow<ScreenItemName=string>extends HmiScreenItemBase,HMIScreenWindowInterface{TabIntoWindow:boolean;
/** * Reference to a screen to be shown in the screen window. */
Screen:string;
/** * Name is taken from the current screen when read. (For activation Name has to be known via CNS.). */readonly ScreenName:string;
/** * Number is taken from the current screen when read. (For activation Number has to be known via CNS.). */readonly ScreenNumber:UInt16;
/** * Specifies the server prefix. */
System:string;
/** * Defining the zoom factor for the screen window, which may differ from the zoom factor of the contained screen. The default is 1.0 representing an unzoomed (100%). */
CurrentZoomFactor:Float;
/** * Defines the screen position in the screen window. */
VerticalScrollBarVisibility:HmiScrollBarVisibility;
/** * Specifies the vertical position of the screen within the screen window in DIU. */
VerticalScrollBarPosition:Int32;
/** * Defines the screen position in the screen window. */
HorizontalScrollBarVisibility:HmiScrollBarVisibility;
/** * Specifies the horizontal position of the screen within the screen window in DIU. */
HorizontalScrollBarPosition:Int32;
/** * Specifies whether the screen or screen window shall adapt its size. */
Adaption:HmiScreenWindowAdaption;
/** * States whether zooming is allowed (‘InteractiveZooming’ = true) or not for this screen window. */
InteractiveZooming:boolean;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model ScreenWindowLayout. */interface HmiScreenWindowLayout extends HmiScreenItemBase{readonly Name:string;DisplayName:string;Width:UInt32;Height:UInt32;}
/** * Object model ScrollBarSystem. */interface HmiScrollBarSystemPart extends HmiScreenObjectBase{readonly AlternateBackColor:UInt32;readonly BorderColor:UInt32;readonly AlternateBorderColor:UInt32;readonly AlternateForeColor:UInt32;readonly BackColor:UInt32;readonly BorderWidth:UInt8;readonly ForeColor:UInt32;readonly ThumbForeColor:UInt32;readonly ThumbBackColor:UInt32;
/** * Depending on horizontal or vertical orientation, Thickness will be considered by renderer for Width or Height. */readonly Thickness:UInt32;
/** * Defines whether the scrollbar floats over the content or needs some space from the content. */readonly Floating:boolean;readonly RenderingTemplate:string;}
/** * Object model SelectionItem. */interface HmiSelectionItemPart extends HmiScreenObjectBase{Text:string;Graphic:string;IsSelected:boolean;}
/** * Object model SelectionSystem. */interface HmiSelectionSystemPart extends HmiScreenObjectBase{readonly BorderWidth:UInt8;readonly BorderColor:UInt32;readonly RenderingTemplate:string;}
/** * Object model Slider. */interface HmiSlider<ScreenItemName=string>extends HmiScreenItemBase{ThumbForeColor:UInt32;ThumbBackColor:UInt32;
/** * While manipulating the sliding control, the value will be written down to process immediately, not only when releasing the control. */
WriteDuringChange:boolean;
/** * Shows the current formatted value as text in addition to the bar. */
ShowValue:boolean;
/** * Static position of the current value relative to scale and "bar". Will be shown below/right from title, if both Title and CurrentSliderValue share the same position. */
ValuePosition:HmiSimplePosition;
/** * Migration hint: Was called "SegmentColoring" in Classic. */
BarMode:HmiBarMode;StraightScale:HmiStraightScalePart;ProcessValue:Variant;
/** * Specifies how to illustrate limit indicators. Migration hint: Combines old properties "ShowLimitLines", "ShowLimitMarkers", etc. */
ThresholdIndicators:HmiThresholdIndicator;
/** * The trend Indicator itself is part of the rendering template (e.g. an arrow up/down) and will be shown if latest value was higher/lower than the previous one. */
ShowTrendIndicator:boolean;TrendIndicatorColor:UInt32;
/** * Used for ProcessIndicator or for Bar in SegementedStatic. */
ProcessValueIndicatorForeColor:UInt32;ProcessValueIndicatorBackColor:UInt32;
/** * Defines the visual representation of indicator for the current process value. */
ProcessValueIndicatorMode:HmiProcessIndicatorMode;
/** * Migration hint: Known as "StartValue". */
OriginValue:Float;
/** * States whether the origin value is an absolute value or if the origin is calculated from a percental declaration between minimum and maximum value. */
RelativeToOrigin:boolean;
/** * Defines whether indicators for the highest/lowest value seen have to be shown. ("Schleppzeiger"). */
PeakIndicators:HmiPeakIndicator;OutputFormat:string;NormalRangeColor:UInt32;
/** * Max peak value based on the ProcessValue. */readonly ComputedMaxPeakValue:Variant;
/** * Min peak value based on the ProcessValue. */readonly ComputedMinPeakValue:Variant;
/** * Calculated tendency for new value based on ProcessValue. */readonly ComputedValueTendency:HmiValueTendency;ScaleBackColor:UInt32;ScaleForeColor:UInt32;
/** * Migration Hint: Was ProcessValueIndicatorFont before. */
Font:HmiFontPart;readonly Thresholds:HmiThresholdCollection;Title:HmiTextPart;Label:HmiTextPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model SnapPoint. */interface HmiSnapPointPart extends HmiScreenObjectBase{
/** * Reference to some screen item. */
SourceItem:HmiScreenItemBase;
/** * Index of the relevant snap point. Index=0 is the snap point on top corresponding with 12 o'clock. */
SelectedSnapPointIndex:UInt32;}
/** * Object model StatusBar. */interface HmiStatusBarPart extends HmiScreenObjectBase{Visible:boolean;Enabled:boolean;BackColor:UInt32;ShowToolTips:boolean;Font:HmiFontPart;readonly Elements:HmiControlBarElementCollection;Margin:HmiMarginPart;Padding:HmiPaddingPart;}
/** * Object model StraightScale. */interface HmiStraightScalePart extends HmiScreenObjectBase{
/** * Migration hint: Former modes UpAndDown and LeftAndRight can be specified by using the BarOriginValue in addition to this orientation. */
Orientation:HmiOrientation;
/** * The scaling type has influence on the scale (e.g. formatting the labels and ticks in a way it fits to logarithmic scaling), the bar segment as well as markers, indicators, etc. */
ScalingType:HmiScalingType;
/** * Number of primary divisions (in between large ticks). */
DivisionCount:Int32;
/** * Number of secondary divisions (in between small ticks). A division count of 1 does not draw additional smaller ticks. */
SubDivisionCount:Int32;
/** * Defines to which primary tick a label has to be drawn, e.g. 3 would mean the first and every third tick is labeled. */
LargeTickLabelingStep:UInt8;BeginValue:Float;EndValue:Float;
/** * Specifies a format pattern that is applied to scale label's and process value indicators. Migration hint: Replaces "DecimalPlaces" and ShowSignForPositiveLabel" and "UseExponentialFormat". */
OutputFormat:string;LabelFont:HmiFontPart;
/** * Unit comes from Tag (see CHROM Tag Model). */
MeasurementUnitType:HmiMeasurementUnit;
/** * Unit is not shown in axes if multiple trends referencing the same axis are using different measurement units at runtime. */readonly MeasurementUnit:string;AutoScaling:boolean;ScaleMode:HmiScaleMode;LabelColor:UInt32;TickColor:UInt32;}
/** * Object model SwacContainer. */interface HmiSwacContainer<ScreenItemName=string>extends HmiScreenItemBase{
/** * URL where the SWAC component is deployed and has to be taken from. */
Url:string;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * CustomControl-, SwacComponent-, WidgetType. */readonly ContainedType:string;
/** * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control). */
Properties:HmiDynamicPropertyPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model SymbolContainer. */interface HmiSymbolContainer<ScreenItemName=string>extends HmiScreenItemBase{EffectColor:UInt32;
/** * Open Issue: Can a wireframe visualization be applied as effect on commercially bought SVGs? What if the actual colormatrix could be specified at the SymbolView?. */
Effect:HmiSymbolEffect;
/** * Does currently consider the quality code of the dynamic only, not the actual process value. */
ProcessValue:Variant;Flip:HmiFlipMode;
/** * Limit colors will override the BackColor property in case of limit violation. */readonly Thresholds:HmiThresholdCollection;
/** * In case of custom widget container, this template is provided through the ContainedType property and not by the current style. */readonly RenderingTemplate:string;VisualizeQuality:boolean;
/** * CustomControl-, SwacComponent-, WidgetType. */readonly ContainedType:string;
/** * Holds dynamic properties as defined by Faceplate, Template or Manifest (SWAC, Custom Web Control). */
Properties:HmiDynamicPropertyPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model SymbolicIOField. */interface HmiSymbolicIOField<ScreenItemName=string>extends HmiScreenItemBase{AcceptOnDeactivated:boolean;ExpandOnActivate:boolean;
/** * Focus is moved to next screen item according to tab order on operation finished. */
AutoTabOnAccept:boolean;
/** * Migration hint: Was known in Classic as "Mode". */
IOFieldType:HmiIOFieldType;ProcessValue:Variant;
/** * Accepts via double click or Enter or tap. */
AcceptExplicitely:boolean;
/** * Holds the text from the resource list entry valid for the current process value. */readonly Text:string;
/** * Holds the graphic from the resource list entry valid for the current process value. */readonly Graphic:string;SelectionBackColor:UInt32;SelectionForeColor:UInt32;ResourceList:string;
/** * Index of the resource list entry valid for the current process value. (Or -1 if no entry is appropriate at all). Value is provided for templates from VCS. */
SelectedIndex:Int32;Content:HmiContentPart;
/** * Color of the text in the widget. */
ForeColor:UInt32;Font:HmiFontPart;Padding:HmiPaddingPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model SystemDiagnosisControl. */interface HmiSystemDiagnosisControl<ScreenItemName=string>extends HmiScreenItemBase{
/** * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local). */
TimeZone:HmiTimeZone;SystemDiagnosisViewType:HmiSystemDiagnosisViewType;ShowStatusPath:boolean;DiagnosisOverviewPathText:string;DiagnosisBufferPathText:string;SystemDiagnosisView:HmiDataGridViewPart;MatrixView:HmiMatrixViewPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;
/** * @returns void */
GoToPlc():void;}
/** * Object model SystemDiagnosisControlColumn. */interface HmiSystemDiagnosisControlColumnPart extends HmiScreenObjectBase{SystemDiagnosisControlBlock:HmiSystemDiagnosisControlBlock;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model SystemDiagnosisDetailView. */interface HmiSystemDiagnosisDetailViewPart extends HmiScreenObjectBase{readonly HardwareDetails:HmiSystemDiagnosisHardwareDetailCollection;
/** * Specifies whether rows or colums have alternating colors. */
ColoringMode:HmiGridColoringMode;ForeColor:UInt32;BackColor:UInt32;AlternateBackColor:UInt32;AlternateForeColor:UInt32;SelectionForeColor:UInt32;SelectionBackColor:UInt32;SelectFullRow:boolean;GridSelectionMode:HmiGridSelectionMode;HorizontalScrollBarVisibility:HmiScrollBarVisibility;VerticalScrollBarVisibility:HmiScrollBarVisibility;SelectionBorderWidth:UInt8;SelectionBorderColor:UInt32;
/** * Setting this property to true turns all AllowSort properties on the individual columns active (the actual true/false value of the column is used). False disables sorting for all columns (while the column's property value remains). */
AllowSort:boolean;
/** * Unit: DIU. A size of 0 results in auto mode which adapts to the font size and the individual number of lines within a row. No partial rows shall be created. Images will be resized according to a single line. */
RowHeight:UInt8;GridLineColor:UInt32;GridLineWidth:UInt8;GridLineVisibility:HmiSimpleGridLine;AllowFilter:boolean;
/** * Is the font to be used within the table (cells). */
Font:HmiFontPart;HeaderSettings:HmiDataGridHeaderSettingsPart;CellPadding:HmiPaddingPart;
/** * This collection can hold any class derived from HmiDataGridColumnPartbase. Engineering should only configure meaningful columns (e.g. HmiAlarmColumnPart for a complex property "AlarmView"). */readonly Columns:HmiDataGridColumnCollection;}
/** * Object model SystemDiagnosisHardwareDetail. */interface HmiSystemDiagnosisHardwareDetailPart extends HmiScreenObjectBase{Visible:boolean;SystemDiagnosisMatrixBlock:HmiSystemDiagnosisMatrixBlock;}
/** * Object model SystemDiagnosisMatrixColumn. */interface HmiSystemDiagnosisMatrixColumnPart extends HmiScreenObjectBase{SystemDiagnosisMatrixBlock:HmiSystemDiagnosisMatrixBlock;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model TagInterface. */interface HmiTagInterfacePart extends HmiScreenObjectBase{
/** * A simple tag’s primitive data type or STRUCT in case of a structured tag. Data types according to SDS CHROM General. */readonly DataType:UInt8;Tag:TagName;
/** * Gives information about the tag name in the current language. (Comparable to measurement unit. See CHROM tag model.). */readonly TagDisplayName:string;
/** * References the underlying structured tag type or null. */readonly StructuredTagType:string;}
/** * Object model Text. */interface HmiText<ScreenItemName=string>extends HmiScreenItemBase{Text:string;VerticalTextAlignment:HmiVerticalAlignment;HorizontalTextAlignment:HmiHorizontalAlignment;ForeColor:UInt32;Font:HmiFontPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model TextBox. */interface HmiTextBox<ScreenItemName=string>extends HmiScreenItemBase{ReadOnly:boolean;Text:string;
/** * Specifies whether lines shall be wrapped in case of not enough screen item width. */
TextWrapping:HmiTextWrapping;VerticalTextAlignment:HmiVerticalAlignment;HorizontalTextAlignment:HmiHorizontalAlignment;TextTrimming:HmiTextTrimming;
/** * Color of the text in the widget. */
ForeColor:UInt32;Font:HmiFontPart;Padding:HmiPaddingPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model Text. */interface HmiTextPart extends HmiScreenObjectBase{Text:string;ForeColor:UInt32;Visible:boolean;Font:HmiFontPart;}
/** * Object model Threshold. */interface HmiThresholdPart extends HmiScreenObjectBase{
/** * "Gaps" have to be configured as transparent colors. */
Color:UInt32;
/** * Name of threshold. */
Name:string;DisplayName:string;ThresholdMode:HmiThresholdMode;
/** * Taken from tag. (Normal range does not provide any value, since there is no treshold at the tag.). */readonly Value:Float;}
/** * Object model TimeAxis. */interface HmiTimeAxisPart extends HmiScreenObjectBase{OutputFormat:string;
/** * Always move visible area with recently added value. */
AlwaysShowRecent:boolean;LabelFont:HmiFontPart;Visible:boolean;DisplayName:string;AxisColor:UInt32;AutoScaling:boolean;ScaleMode:HmiScaleMode;LabelColor:UInt32;TickColor:UInt32;TimeRangeBase:HmiTimeRangeBase;TimeRangeFactor:Int32;BeginTime:DateTime;EndTime:DateTime;PointCount:Int32;RangeType:HmiTimeRangeType;}
/** * Object model TimeRangeColumn. */interface HmiTimeRangeColumnPart extends HmiScreenObjectBase{TimeRangeBase:HmiTimeRangeBase;TimeRangeFactor:Int32;BeginTime:DateTime;EndTime:DateTime;PointCount:Int32;RangeType:HmiTimeRangeType;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model ToggleSwitch. */interface HmiToggleSwitch<ScreenItemName=string>extends HmiScreenItemBase{IsAlternateState:boolean;
/** * HotHeys are unique within a screen. In case of executing a hotkey, the chain is resolved starting from the active (local) window down to the HmiDesktop. */readonly HotKey:UInt16;
/** * Graphic shown while the button is NOT pressed/down. Migration hint: Was "GraphicOn" in Classic. */
Graphic:string;
/** * Text shown while the button is NOT pressed/down. Migration hint: Was "TextOn" in Classic. */
Text:string;
/** * Graphic shown while the button is pressed/down. */
AlternateGraphic:string;
/** * Text shown while the button is pressed/down. */
AlternateText:string;
/** * Color of the button's text. */
ForeColor:UInt32;Font:HmiFontPart;Padding:HmiPaddingPart;Content:HmiContentPart;readonly RenderingTemplate:string;BorderColor:UInt32;AlternateBorderColor:UInt32;BorderWidth:UInt8;BackColor:UInt32;
/** * Alternate color to be used for the background. BackColor and AlternateBackColor can be used for creating a horizontal gradient with BackColor on top and AlternateBackColor on bottom. */
AlternateBackColor:UInt32;VisualizeQuality:boolean;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies the rotation angle of the screen item in degree. */
RotationAngle:Int16;
/** * Specifies the X coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterX:Float;
/** * Specifies the Y coordinate of the rotation point. The value is the relative or absolute derivation from the screen item's center point. */
RotationCenterY:Float;
/** * Specifies the RotationCenterPlacement works. Refer to RotationCenterPlacement. */
RotationCenterPlacement:HmiRotationCenterPlacement;ToolTipText:string;
/** * Migration Hint: Was known as Transparency before (0 to 100). 0.0 opacity means fully transparent. */
Opacity:Float;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;}
/** * Object model ToolBar. */interface HmiToolBarPart extends HmiScreenObjectBase{UseHotKeys:boolean;Visible:boolean;Enabled:boolean;BackColor:UInt32;ShowToolTips:boolean;Font:HmiFontPart;readonly Elements:HmiControlBarElementCollection;Margin:HmiMarginPart;Padding:HmiPaddingPart;}
/** * Object model TooltipSystem. */interface HmiTooltipSystemPart extends HmiScreenObjectBase{readonly BackColor:UInt32;readonly ForeColor:UInt32;readonly BorderColor:UInt32;readonly Text:string;readonly Graphic:string;readonly VerticalAlignment:HmiVerticalAlignment;readonly HorizontalAlignment:HmiHorizontalAlignment;readonly Content:HmiContentPart;readonly Font:HmiFontPart;readonly RenderingTemplate:string;}
/** * Object model TopLevelScreenWindow. */interface HmiTopLevelScreenWindow<ScreenItemName=string>extends HmiScreenItemBase,HMIScreenWindowInterface{
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * Reference to a screen to be shown in the screen window. */
Screen:string;
/** * Name is taken from the current screen when read. (For activation Name has to be known via CNS.). */readonly ScreenName:string;
/** * Number is taken from the current screen when read. (For activation Number has to be known via CNS.). */readonly ScreenNumber:UInt16;
/** * Specifies the server prefix. */
System:string;
/** * Defining the zoom factor for the screen window, which may differ from the zoom factor of the contained screen. The default is 1.0 representing an unzoomed (100%). */
CurrentZoomFactor:Float;
/** * Defines the screen position in the screen window. */
VerticalScrollBarVisibility:HmiScrollBarVisibility;
/** * Specifies the vertical position of the screen within the screen window in DIU. */
VerticalScrollBarPosition:Int32;
/** * Defines the screen position in the screen window. */
HorizontalScrollBarVisibility:HmiScrollBarVisibility;
/** * Specifies the horizontal position of the screen within the screen window in DIU. */
HorizontalScrollBarPosition:Int32;
/** * Specifies whether the screen or screen window shall adapt its size. */
Adaption:HmiScreenWindowAdaption;
/** * States whether zooming is allowed (‘InteractiveZooming’ = true) or not for this screen window. */
InteractiveZooming:boolean;
/** * Iidentifying the monitor in a multi-monitor configuration. */readonly Monitor:UInt8;
/** * Specifies the startup position of the screen window. In case of value 'none' the window is positioned relative to the configured Monitor via Left and Top property. Migration hint: Was "WindowStartupPosition" in Classic. */
StartupPosition:HmiWindowStartupPosition;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;}
/** * Object model TouchArea. */interface HmiTouchArea<ScreenItemName=string>extends HmiScreenItemBase{BackColor:UInt32;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Specifies access control for the screen item. The value of attribute ‘Authorization’ corresponds to a function right according to [SPH-UMAC]. This attribute is read-only and supports no dynamization because of security reasons. */readonly Authorization:string;
/** * Reflects whether the currently logged in user has sufficient function rights (see property Authorization). */readonly Operability:HmiOperability;
/** * If set to true, the screen item configured within the screen (or a parent screen if not configured locally) enables the screen item only when the release button while the button is pressed. */readonly RequireExplicitUnlock:boolean;}
/** * Object model TrendArea. */interface HmiTrendAreaPart extends HmiScreenObjectBase{SelectedTrend:HmiTrendPart;
/** * Defines the appearance of the two statistic rulers in this area. */
StatisticRulers:HmiRulerPart;readonly TopTimeAxes:HmiTimeAxisCollection;readonly BottomTimeAxes:HmiTimeAxisCollection;readonly Trends:HmiTrendCollection;
/** * Is used as key for the graph area. */
Name:string;Visible:boolean;BackColor:UInt32;
/** * Grid lines are always shown for the area's inner axes (that's the axis with index=0 in the parts arrays). */
GridLines:HmiGridLine;MajorGridLinesColor:UInt32;MinorGridLinesColor:UInt32;
/** * The TrendControl will set the areas proportional to their individual HeightFactors. */
SizeFactor:UInt16;
/** * Defines the appearance of the ruler in this area. */
Ruler:HmiRulerPart;readonly LeftValueAxes:HmiYValueAxisCollection;readonly RightValueAxes:HmiYValueAxisCollection;}
/** * Object model TrendColumn. */interface HmiTrendColumnPart extends HmiScreenObjectBase{TrendInfoBlock:HmiTrendInfoBlock;
/** * Unique name for the column within the DataGrid. */readonly Name:string;Visible:boolean;
/** * The cells of the affected column are enabled or disabled. A disabled cell does not fire events and cannot be modified. Nevertheless, disabled columns can still be sorted. */
Enabled:boolean;Width:UInt32;MinimumWidth:UInt32;MaximumWidth:UInt32;
/** * This property is ignored if the AllowSort=false on the overall screen item is set. */
AllowSort:boolean;SortDirection:HmiSortDirection;
/** * Index 0 is ignored, starting with 1 (highest) the index specifies the priority of columns and their individual sort order. Index > 0 must be unique. */
SortOrder:UInt16;OutputFormat:string;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
ForeColor:UInt32;
/** * Alpha channel is zero; colors are taken from the HmiDataGridViewPart; otherwise colors are mixed in order from grid to column to cells. */
BackColor:UInt32;Header:HmiDataGridColumnHeaderPart;Content:HmiContentPart;}
/** * Object model TrendCompanion. */interface HmiTrendCompanion<ScreenItemName=string>extends HmiScreenItemBase{TrendCompanionMode:HmiTrendCompanionMode;
/** * Specifies wether the companion will always be shown, or just if the parent's ShowRuler property is set. */
ShowAlways:boolean;
/** * Takes trend controls back color as back color for each row in the grid. */
UseSourceControlBackColor:boolean;
/** * Takes the individual trend color as font color for the corresponding entry in the grid. */
UseSourceControlTrendColors:boolean;SourceTrendControl:HmiTrendControlBase;
/** * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local). */
TimeZone:HmiTimeZone;
/** * Accepts only columns of type HmiTrendColumnPart. */
TrendRulerView:HmiDataGridViewPart;
/** * Accepts only columns of type HmiTrendColumnPart. */
TrendStatisticAreaView:HmiDataGridViewPart;
/** * Accepts only columns of type HmiTrendColumnPart. */
TrendStatisticResultView:HmiDataGridViewPart;SnapToSourceControl:boolean;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;}
/** * Object model TrendControl. */interface HmiTrendControl<ScreenItemName=string>extends HmiScreenItemBase{ShowStatisticRulers:boolean;
/** * Positive numbers according to the Microsoft time zone index value specification, negative numbers from CHROM (-1 = RH local). */
TimeZone:HmiTimeZone;readonly TrendAreas:HmiTrendAreaCollection;
/** * The space between TrendAreas. There is no such property for Comfort since there is always just exactly one area. */
AreaSpacing:UInt16;
/** * Online = Diagram is updated with new values, Offline = Diagram is frozen, no new values are added. */
Online:boolean;ExtendRulerToAxis:boolean;ShowRuler:boolean;ShiftAxes:boolean;Legend:HmiLegendPart;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * Removes the user changes in the TrendControl from the user profile service. * @param Scope * @returns void */
ResetUserProfile(Scope:object):void;
/** * Persists the user changes in the TrendControl in the user profile service. * @param Scope * @returns void */
SaveUserProfile(Scope:object):void;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;}
/** * Object model Trend. */interface HmiTrendPart extends HmiScreenObjectBase{
/** * Reference to a time axis part within the TrendControl. */
TimeAxis:HmiTimeAxisPart;
/** * Aggregation applied to logging tags only. */
AggregationMode:HmiAggregationMode;TrendMode:HmiTrendMode;Visible:boolean;DisplayName:string;DashType:HmiDashType;LineWidth:UInt8;LineColor:UInt32;BackFillPattern:HmiFillPattern;BackColor:UInt32;AlternateBackColor:UInt32;MarkerType:HmiMarkerType;MarkerDimension:UInt32;MarkerColor:UInt32;MarkerGraphic:string;
/** * Only relevant for historical data. False means starting from current time. True means data is requested for the complete visible area. */
ShowLoggedDataImmediately:boolean;YValueAxis:HmiYValueAxisPart;
/** * If Limit colors are defined and quality is uncertain with RangeViolation, colors defined in this part are ignored. */
QualityVisualization:HmiQualityPart;
/** * Applies for Y-axis only. */readonly Thresholds:HmiThresholdCollection;DataSourceY:HmiDataSourcePart;}
/** * Object model WebControl. */interface HmiWebControl<ScreenItemName=string>extends HmiScreenItemBase{
/** * String formatted URL pointing to the address the web browser shall display. */
Url:string;BackColor:UInt32;ToolBar:HmiToolBarPart;StatusBar:HmiStatusBarPart;
/** * Specifies the window configuration, e.g. available window control buttons. Migration hint: This bitwise enum replaces various booleans in Classic. */
WindowFlags:HmiWindowFlag;readonly RenderingTemplate:string;Icon:string;CaptionColor:UInt32;Caption:HmiTextPart;
/** * Coordinates in DIU. */
Top:Int32;
/** * Coordinates in DIU. */
Left:Int32;
/** * In DIU. */
Width:UInt32;
/** * In DIU. */
Height:UInt32;
/** * Read-Only property to summarize the current quality of the complete screen item. Will be calculated by considering all influencing tag values, may it be directly configured as a process value or via a dynamization. In case of AdvancedControls only the process value is influencing the quality. If there is no process value(s), the connection state is considered. */readonly CurrentQuality:HmiQuality;ShowFocusVisual:boolean;
/** * Distance to surrounding outside of the screen item when used in layout containers. */
Margin:HmiMarginPart;
/** * Configured name of the screen item. */readonly Name:ScreenItemName;Visible:boolean;readonly Layer:HmiLayerPart;Enabled:boolean;
/** * Screen items specifying a tab index of 0 are not part of the tab order. When invisible, disabled or not operatable, the item will be skipped from tab order at run-time. The TabOrder is not subject of dynamization. */readonly TabIndex:UInt16;
/** * StyleItem's class will be resolved by name. Either for the screen item's type a style item is defined that matches the name given here, or the default style item will be chosen. */readonly StyleItemClass:string;
/** * @param commandId * @param custom * @returns void */
FireCommand(commandId:Int32,custom:boolean):void;}
/** * Object model WindowFrameSystem. */interface HmiWindowFrameSystemPart extends HmiScreenObjectBase{readonly RenderingTemplate:string;}
/** * Object model XValueAxis. */interface HmiXValueAxisPart extends HmiScreenObjectBase{ApplyScalingEntries:boolean;ShowScalingDisplayNames:boolean;AutoRange:boolean;readonly HelpLines:HmiHelpLineCollection;readonly ScalingEntries:HmiScalingEntryCollection;Visible:boolean;DisplayName:string;AxisColor:UInt32;
/** * The scaling type has influence on the scale (e.g. formatting the labels and ticks in a way it fits to logarithmic scaling), the bar segment as well as markers, indicators, etc. */
ScalingType:HmiScalingType;
/** * Number of primary divisions (in between large ticks). */
DivisionCount:Int32;
/** * Number of secondary divisions (in between small ticks). A division count of 1 does not draw additional smaller ticks. */
SubDivisionCount:Int32;
/** * Defines to which primary tick a label has to be drawn, e.g. 3 would mean the first and every third tick is labeled. */
LargeTickLabelingStep:UInt8;BeginValue:Float;EndValue:Float;
/** * Specifies a format pattern that is applied to scale label's and process value indicators. Migration hint: Replaces "DecimalPlaces" and ShowSignForPositiveLabel" and "UseExponentialFormat". */
OutputFormat:string;LabelFont:HmiFontPart;
/** * Unit comes from Tag (see CHROM Tag Model). */
MeasurementUnitType:HmiMeasurementUnit;
/** * Unit is not shown in axes if multiple trends referencing the same axis are using different measurement units at runtime. */readonly MeasurementUnit:string;AutoScaling:boolean;ScaleMode:HmiScaleMode;LabelColor:UInt32;TickColor:UInt32;}
/** * Object model YValueAxis. */interface HmiYValueAxisPart extends HmiScreenObjectBase{ApplyScalingEntries:boolean;ShowScalingDisplayNames:boolean;AutoRange:boolean;readonly HelpLines:HmiHelpLineCollection;readonly ScalingEntries:HmiScalingEntryCollection;Visible:boolean;DisplayName:string;AxisColor:UInt32;
/** * The scaling type has influence on the scale (e.g. formatting the labels and ticks in a way it fits to logarithmic scaling), the bar segment as well as markers, indicators, etc. */
ScalingType:HmiScalingType;
/** * Number of primary divisions (in between large ticks). */
DivisionCount:Int32;
/** * Number of secondary divisions (in between small ticks). A division count of 1 does not draw additional smaller ticks. */
SubDivisionCount:Int32;
/** * Defines to which primary tick a label has to be drawn, e.g. 3 would mean the first and every third tick is labeled. */
LargeTickLabelingStep:UInt8;BeginValue:Float;EndValue:Float;
/** * Specifies a format pattern that is applied to scale label's and process value indicators. Migration hint: Replaces "DecimalPlaces" and ShowSignForPositiveLabel" and "UseExponentialFormat". */
OutputFormat:string;LabelFont:HmiFontPart;
/** * Unit comes from Tag (see CHROM Tag Model). */
MeasurementUnitType:HmiMeasurementUnit;
/** * Unit is not shown in axes if multiple trends referencing the same axis are using different measurement units at runtime. */readonly MeasurementUnit:string;AutoScaling:boolean;ScaleMode:HmiScaleMode;LabelColor:UInt32;TickColor:UInt32;}
/** * Object model HmiThresholdCollection. */interface HmiThresholdCollection{
/** * Count of items in HmiThresholdPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiThresholdPart Collection. * @param HmiThresholdName * @returns HmiThresholdPart */(HmiThresholdName:string):HmiThresholdPart;
/** * Name of the item in HmiThresholdPart Collection. * @param HmiThresholdName * @returns HmiThresholdPart */
Item(HmiThresholdName:string):HmiThresholdPart;}
/** * Object model HmiConsideredColumnCollection. */interface HmiConsideredColumnCollection{
/** * Count of items in HmiConsideredColumnPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiConsideredColumnPart Collection. * @param HmiConsideredColumnName * @returns HmiConsideredColumnPart */(HmiConsideredColumnName:string):HmiConsideredColumnPart;
/** * Name of the item in HmiConsideredColumnPart Collection. * @param HmiConsideredColumnName * @returns HmiConsideredColumnPart */
Item(HmiConsideredColumnName:string):HmiConsideredColumnPart;}
/** * Object model HmiSelectionItemCollection. */interface HmiSelectionItemCollection{
/** * Count of items in HmiSelectionItemPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiSelectionItemPart Collection. * @param HmiSelectionItemName * @returns HmiSelectionItemPart */(HmiSelectionItemName:string):HmiSelectionItemPart;
/** * Name of the item in HmiSelectionItemPart Collection. * @param HmiSelectionItemName * @returns HmiSelectionItemPart */
Item(HmiSelectionItemName:string):HmiSelectionItemPart;}
/** * Object model HmiParameterCollection. */interface HmiParameterCollection{
/** * Count of items in HmiParameterPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiParameterPart Collection. * @param HmiParameterName * @returns HmiParameterPart */(HmiParameterName:string):HmiParameterPart;
/** * Name of the item in HmiParameterPart Collection. * @param HmiParameterName * @returns HmiParameterPart */
Item(HmiParameterName:string):HmiParameterPart;}
/** * Object model HmiDataGridColumnCollection. */interface HmiDataGridColumnCollection{
/** * Count of items in HmiDataGridColumnPartBase Collection. */readonly Count:UInt32;
/** * Name of the item in HmiDataGridColumnPartBase Collection. * @param HmiDataGridColumnName * @returns HmiDataGridColumnPartBase */(HmiDataGridColumnName:string):HmiDataGridColumnPartBase;
/** * Name of the item in HmiDataGridColumnPartBase Collection. * @param HmiDataGridColumnName * @returns HmiDataGridColumnPartBase */
Item(HmiDataGridColumnName:string):HmiDataGridColumnPartBase;}
/** * Object model HmiLayerCollection. */interface HmiLayerCollection{
/** * Count of items in HmiLayerPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiLayerPart Collection. * @param HmiLayerName * @returns HmiLayerPart */(HmiLayerName:string):HmiLayerPart;
/** * Name of the item in HmiLayerPart Collection. * @param HmiLayerName * @returns HmiLayerPart */
Item(HmiLayerName:string):HmiLayerPart;}
/** * Object model HmiXValueAxisCollection. */interface HmiXValueAxisCollection{
/** * Count of items in HmiXValueAxisPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiXValueAxisPart Collection. * @param HmiXValueAxisName * @returns HmiXValueAxisPart */(HmiXValueAxisName:string):HmiXValueAxisPart;
/** * Name of the item in HmiXValueAxisPart Collection. * @param HmiXValueAxisName * @returns HmiXValueAxisPart */
Item(HmiXValueAxisName:string):HmiXValueAxisPart;}
/** * Object model HmiFunctionTrendCollection. */interface HmiFunctionTrendCollection{
/** * Count of items in HmiFunctionTrendPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiFunctionTrendPart Collection. * @param HmiFunctionTrendName * @returns HmiFunctionTrendPart */(HmiFunctionTrendName:string):HmiFunctionTrendPart;
/** * Name of the item in HmiFunctionTrendPart Collection. * @param HmiFunctionTrendName * @returns HmiFunctionTrendPart */
Item(HmiFunctionTrendName:string):HmiFunctionTrendPart;}
/** * Object model HmiYValueAxisCollection. */interface HmiYValueAxisCollection{
/** * Count of items in HmiYValueAxisPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiYValueAxisPart Collection. * @param HmiYValueAxisName * @returns HmiYValueAxisPart */(HmiYValueAxisName:string):HmiYValueAxisPart;
/** * Name of the item in HmiYValueAxisPart Collection. * @param HmiYValueAxisName * @returns HmiYValueAxisPart */
Item(HmiYValueAxisName:string):HmiYValueAxisPart;}
/** * Object model HmiFunctionTrendAreaCollection. */interface HmiFunctionTrendAreaCollection{
/** * Count of items in HmiFunctionTrendAreaPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiFunctionTrendAreaPart Collection. * @param HmiFunctionTrendAreaName * @returns HmiFunctionTrendAreaPart */(HmiFunctionTrendAreaName:string):HmiFunctionTrendAreaPart;
/** * Name of the item in HmiFunctionTrendAreaPart Collection. * @param HmiFunctionTrendAreaName * @returns HmiFunctionTrendAreaPart */
Item(HmiFunctionTrendAreaName:string):HmiFunctionTrendAreaPart;}
/** * Object model HmiDynamicPropertyCollection. */interface HmiDynamicPropertyCollection{
/** * Count of items in HmiDynamicPropertyPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiDynamicPropertyPart Collection. * @param HmiDynamicPropertyName * @returns HmiDynamicPropertyPart */(HmiDynamicPropertyName:string):HmiDynamicPropertyPart;
/** * Name of the item in HmiDynamicPropertyPart Collection. * @param HmiDynamicPropertyName * @returns HmiDynamicPropertyPart */
Item(HmiDynamicPropertyName:string):HmiDynamicPropertyPart;}
/** * Object model HmiSystemDiagnosisHardwareDetailCollection. */interface HmiSystemDiagnosisHardwareDetailCollection{
/** * Count of items in HmiSystemDiagnosisHardwareDetailPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiSystemDiagnosisHardwareDetailPart Collection. * @param HmiSystemDiagnosisHardwareDetailName * @returns HmiSystemDiagnosisHardwareDetailPart */(HmiSystemDiagnosisHardwareDetailName:string):HmiSystemDiagnosisHardwareDetailPart;
/** * Name of the item in HmiSystemDiagnosisHardwareDetailPart Collection. * @param HmiSystemDiagnosisHardwareDetailName * @returns HmiSystemDiagnosisHardwareDetailPart */
Item(HmiSystemDiagnosisHardwareDetailName:string):HmiSystemDiagnosisHardwareDetailPart;}
/** * Object model HmiProcessDiagnosisOverviewElementCollection. */interface HmiProcessDiagnosisOverviewElementCollection{
/** * Count of items in HmiProcessDiagnosisOverviewElementPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiProcessDiagnosisOverviewElementPart Collection. * @param HmiProcessDiagnosisOverviewElementName * @returns HmiProcessDiagnosisOverviewElementPart */(HmiProcessDiagnosisOverviewElementName:string):HmiProcessDiagnosisOverviewElementPart;
/** * Name of the item in HmiProcessDiagnosisOverviewElementPart Collection. * @param HmiProcessDiagnosisOverviewElementName * @returns HmiProcessDiagnosisOverviewElementPart */
Item(HmiProcessDiagnosisOverviewElementName:string):HmiProcessDiagnosisOverviewElementPart;}
/** * Object model HmiControlBarElementCollection. */interface HmiControlBarElementCollection{
/** * Count of items in HmiControlBarElementPartBase Collection. */readonly Count:UInt32;
/** * Name of the item in HmiControlBarElementPartBase Collection. * @param HmiControlBarElementName * @returns HmiControlBarElementPartBase */(HmiControlBarElementName:string):HmiControlBarElementPartBase;
/** * Name of the item in HmiControlBarElementPartBase Collection. * @param HmiControlBarElementName * @returns HmiControlBarElementPartBase */
Item(HmiControlBarElementName:string):HmiControlBarElementPartBase;}
/** * Object model HmiTimeAxisCollection. */interface HmiTimeAxisCollection{
/** * Count of items in HmiTimeAxisPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiTimeAxisPart Collection. * @param HmiTimeAxisName * @returns HmiTimeAxisPart */(HmiTimeAxisName:string):HmiTimeAxisPart;
/** * Name of the item in HmiTimeAxisPart Collection. * @param HmiTimeAxisName * @returns HmiTimeAxisPart */
Item(HmiTimeAxisName:string):HmiTimeAxisPart;}
/** * Object model HmiTrendCollection. */interface HmiTrendCollection{
/** * Count of items in HmiTrendPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiTrendPart Collection. * @param HmiTrendName * @returns HmiTrendPart */(HmiTrendName:string):HmiTrendPart;
/** * Name of the item in HmiTrendPart Collection. * @param HmiTrendName * @returns HmiTrendPart */
Item(HmiTrendName:string):HmiTrendPart;}
/** * Object model HmiTrendAreaCollection. */interface HmiTrendAreaCollection{
/** * Count of items in HmiTrendAreaPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiTrendAreaPart Collection. * @param HmiTrendAreaName * @returns HmiTrendAreaPart */(HmiTrendAreaName:string):HmiTrendAreaPart;
/** * Name of the item in HmiTrendAreaPart Collection. * @param HmiTrendAreaName * @returns HmiTrendAreaPart */
Item(HmiTrendAreaName:string):HmiTrendAreaPart;}
/** * Object model HmiHelpLineCollection. */interface HmiHelpLineCollection{
/** * Count of items in HmiHelpLinePart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiHelpLinePart Collection. * @param HmiHelpLineName * @returns HmiHelpLinePart */(HmiHelpLineName:string):HmiHelpLinePart;
/** * Name of the item in HmiHelpLinePart Collection. * @param HmiHelpLineName * @returns HmiHelpLinePart */
Item(HmiHelpLineName:string):HmiHelpLinePart;}
/** * Object model HmiScalingEntryCollection. */interface HmiScalingEntryCollection{
/** * Count of items in HmiScalingEntryPart Collection. */readonly Count:UInt32;
/** * Name of the item in HmiScalingEntryPart Collection. * @param HmiScalingEntryName * @returns HmiScalingEntryPart */(HmiScalingEntryName:string):HmiScalingEntryPart;
/** * Name of the item in HmiScalingEntryPart Collection. * @param HmiScalingEntryName * @returns HmiScalingEntryPart */
Item(HmiScalingEntryName:string):HmiScalingEntryPart;}
/** * Object model HMIRuntime.TagLogging.Enums. */interface HMITagLoggingEnums{readonly hmiTagLoggingValueFlags:typeof hmiTagLoggingValueFlags;}
/** * Object model HMIRuntime.TagLogging.SysFct. */interface HMITagLoggingSysFct{
/** * Write a new tag value to the Tag Logging Archive. * @param LoggedTagName Specifies the tag. * @param Value Specifies the value to be written to the tag. * @param Timestamp Specifies the timestamp to the corresponding tag value. * @returns ErrorCode */
WriteManualValue<LoggedTagName extends string>(LoggedTagName:LoggedTagName,Value:LoggedTagValueType<LoggedTagName>,Timestamp:DateTime):ErrorCode;
/** * Removes all the records from the specified Tag Logging Archive. * @param LogName Specifies the name of the archive to which the records shall be removed. * @returns PromiseParameterRejErrorCodeTagLogging */
ClearTagLog(LogName:string):PromiseParameterRejErrorCodeTagLogging;
/** * Starts archieving for the specified Data Log. * @param LogName Specifies the name of the archive to which Logging has to be started. * @returns PromiseParameterRejStartStopErrorCodeLogging */
StartTagLog(LogName?:string):PromiseParameterRejStartStopErrorCodeLogging;
/** * Stops archieving for the specified specified Data Log. * @param LogName Specifies the name of the archive to which Logging has to be stopped. * @returns PromiseParameterRejStartStopErrorCodeLogging */
StopTagLog(LogName?:string):PromiseParameterRejStartStopErrorCodeLogging;}
/** * Object model LoggedTag. */interface HMILoggedTag<LoggedTagName=string,LoggedTagValueType=Variant>{
/** * Name of the HMILoggingTag. */readonly Name:LoggedTagName;
/** * Add a comment for a HmiLoggedTag. * @param TimeStamp * @param Language * @param Comment * @returns PromiseParameterRejErrorCodeTagLogging */
AddComment(TimeStamp:DateTime,Language:UInt32,Comment:string):PromiseParameterRejErrorCodeTagLogging;
/** * Reads the logged Tag values in the specified time range. * @param dateFrom Specifies the end of the time range. * @param dateTo Specifies the beginning of the time range. * @param boundingValue Specifies if you want to get bounding values for the time range. * @returns PromiseParameterLoggedTagResult */
Read(dateFrom:DateTime,dateTo:DateTime,boundingValue:boolean):PromiseParameterLoggedTagResult;
/** * Writes correct value to a logged tag. * @param Timestamp Specifies the timestamp of the tag to be corrected. * @param Value Specifies the new tag value to be updated. * @returns ErrorCode */
WriteCorrectionValue(Timestamp:DateTime,Value:LoggedTagValueType):ErrorCode;}
/** * Object model LoggedTagSet. */interface HMILoggedTagSet{
/** * The number of HMILoggedTags in the HMILoggedTagSet. */readonly Count:UInt32;
/** * The error code of the last method call. */readonly Error:ErrorCode;
/** * Accesses a HMILoggedTag object within the HMILoggedTagSet. * @param name LoggedTag name or index (1..n). * @returns HMILoggedTag */<LoggedTagName extends string>(name:LoggedTagName|Int32):HMILoggedTag<LoggedTagName,LoggedTagValueType<LoggedTagName>>;
/** * Accesses a HMILoggedTag object within the HMILoggedTagSet. * @param name LoggedTag name or index (1..n). * @returns HMILoggedTag */
Item<LoggedTagName extends string>(name:LoggedTagName|Int32):HMILoggedTag<LoggedTagName,LoggedTagValueType<LoggedTagName>>;
/** * Adds a HMILoggedTag to the LoggedTagSet. * @param loggedTags This is either the name of a LoggedTag, an array of LoggedTag names. . * @returns HMILoggedTag[] */
Add(loggedTags:LoggedTagName|LoggedTagName[]):HMILoggedTag[];
/** * Removes HMILoggedTags from the LoggedTagSet. * @param loggedTags This is either the name of a LoggedTag or an array of LoggedTag names. * @returns void */
Remove(loggedTags:LoggedTagName|LoggedTagName[]):void;
/** * Reads the logged Tag values in the specified time range. * @param dateFrom Specifies the end of the time range. * @param dateTo Specifies the beginning of the time range. * @param boundingValue Specifies if you want to get bounding values for the time range. * @returns PromiseParameterLoggedTagArrayResult */
Read(dateFrom:DateTime,dateTo:DateTime,boundingValue:boolean):PromiseParameterLoggedTagArrayResult;
/** * Clears all HMILoggedTags from the LoggedTagSet. * @returns void */
Clear():void;}
/** * Object model HMIRuntime.TagLogging. */interface HMITagLogging{
/** * Creates a HMILoggedTagSet object. * @param loggedTagNameArray Array of LoggedTagNames or just a single LoggedTagName. * @returns HMILoggedTagSet */
CreateLoggedTagSet(loggedTagNameArray?:LoggedTagName|LoggedTagName[]):HMILoggedTagSet;
/** * Returns a HMILoggedTag object. * @param loggedTagName Name of the HMILoggedTag. * @returns HMILoggedTag */
LoggedTags<LoggedTagName extends string>(loggedTagName:LoggedTagName):HMILoggedTag<LoggedTagName,LoggedTagValueType<LoggedTagName>>;readonly Enums:HMITagLoggingEnums;readonly SysFct:HMITagLoggingSysFct;}
/** * Object model LoggedTagResult. */interface HMILoggedTagResult{
/** * The name of the HMILoggedTag. */
Name:LoggedTagName;
/** * The error code of the last method call. */
Error:ErrorCode;
/** * The values of the HMILoggedTag. */
Values:HMILoggedTagValueResult;}
/** * Object model LoggedTagValueResult. */interface HMILoggedTagValueResult{
/** * The value of the HMILoggedTagValueResult. */
Value:Variant;
/** * QualityCode of the HMILoggedTagValueResult. */
Quality:UInt32;
/** * TimeStamp of the HMILoggedTagValueResult. */
TimeStamp:DateTime;
/** * Flags of the HMILoggedTagValueResult, refer to hmiTagLoggingValueFlags for the bitwise coded values. */
Flags:hmiTagLoggingValueFlags;}
/** * Object model HMIRuntime.Tags.SysFct. */interface HMITagSysFct{
/** * Writes a value to a HMITag. * @param Tag Specifies the tag. * @param Value Specifies the value to be written to the tag. * @returns ErrorCode */
SetTagValue<TagName extends string>(Tag:TagName,Value:TagValueType<TagName>):ErrorCode;
/** * Decreases the value of the tag by the specified number. * @param Tag Specifies the tag to be decreased. * @param value Must be a numeric type. * @returns ErrorCode */
DecreaseTag(Tag:TagName,value:Float):ErrorCode;
/** * Increases the value of the tag by the specified number. * @param Tag Specifies the tag to be increased. * @param value Must be a numeric type. * @returns ErrorCode */
IncreaseTag(Tag:TagName,value:Float):ErrorCode;
/** * Inverts the specified bit of the value of the supplied tag. * @param Tag Specifies the tag to be modified. * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag).. * @returns ErrorCode */
InvertBitInTag(Tag:TagName,BitNumber:UInt8):ErrorCode;
/** * Resets the specified bit of the value of the supplied tag. * @param Tag Specifies the tag to be modified. * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag). * @returns ErrorCode */
ResetBitInTag(Tag:TagName,BitNumber:UInt8):ErrorCode;
/** * Sets the specified bit of the value of the supplied tag. * @param Tag Specifies the tag to be modified. * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag). * @returns ErrorCode */
SetBitInTag(Tag:TagName,BitNumber:UInt8):ErrorCode;
/** * Converts the input bit pattern of the source tags into an output bit pattern of the target tags. * @param Source Specifies the tag that includes the input bit pattern. * @param Target Specifies the tag in which the output bit pattern is saved. * @param bitsToShift Indicates the number of bits by which the input bit pattern is shifted right. * @param bitPattern Indicates the bit pattern that is used to multiply the shifted input bit pattern. * @returns ErrorCode */
ShiftAndMask(Source:TagName,Target:TagName,bitsToShift:Int8,bitPattern:UInt32):ErrorCode;
/** * Updates Tag values using and Update ID. * @param UpdateID Specifies the Update IDs of the Tags. * @returns ErrorCode */
UpdateTag(UpdateID:UInt32):ErrorCode;
/** * Calling the ChangeDBName Systemfunction on the runtime will change the DB name. * @param MultiplexTagName The tag name. * @param DBName The data block name. * @returns PromiseParameterRejErrorCode */
ChangeDBName(MultiplexTagName:string,DBName:string):PromiseParameterRejErrorCode;}
/** * Object model HMIRuntime.Tags.Inching.SysFct. */interface HMITagInchingSysFct{
/** * Reads the tag from the PLC and writes the value from the parameter to a HMITag. * @param Tag Specifies the tag. * @param Value Specifies the value to be written to the tag. * @returns ErrorCode */
ReadAndSetTagValue<TagName extends string>(Tag:TagName,Value:TagValueType<TagName>):ErrorCode;
/** * Reads the tag from the PLC and decreases the value of the tag by the specified number. * @param Tag Specifies the tag to be decreased. * @param value Must be a numeric type. * @returns ErrorCode */
ReadAndDecreaseTag(Tag:TagName,value:Float):ErrorCode;
/** * Reads the tag from the PLC and increases the value of the tag by the specified number. * @param Tag Specifies the tag to be increased. * @param value Must be a numeric type. * @returns ErrorCode */
ReadAndIncreaseTag(Tag:TagName,value:Float):ErrorCode;
/** * Reads the tag from the PLC and inverts the specified bit of the value of the supplied tag. * @param Tag Specifies the tag to be modified. * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag).. * @returns ErrorCode */
ReadAndInvertBitInTag(Tag:TagName,BitNumber:UInt8):ErrorCode;
/** * Reads the tag from the PLC and resets the specified bit of the value of the supplied tag. * @param Tag Specifies the tag to be modified. * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag). * @returns ErrorCode */
ReadAndResetBitInTag(Tag:TagName,BitNumber:UInt8):ErrorCode;
/** * Reads the tag from the PLC and sets the specified bit of the value of the supplied tag. * @param Tag Specifies the tag to be modified. * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag). * @returns ErrorCode */
ReadAndSetBitInTag(Tag:TagName,BitNumber:UInt8):ErrorCode;}
/** * Object model HMIRuntime.Tags.Enums. */interface HMITagsEnums{readonly hmiWriteType:typeof hmiWriteType;readonly hmiReadType:typeof hmiReadType;}
/** * Object model Tag. */interface HMITag<TagName=string,TagValueType=Variant>{
/** * Name of the HMITag. */readonly Name:TagName;
/** * Value of the HMITag. */
Value:TagValueType;
/** * QualityCode of the Value. */
QualityCode:UInt32;
/** * TimeStamp of the Value. */
TimeStamp:DateTime;
/** * ErrorCode of the previous Read or Write operation. */readonly LastError:ErrorCode;
/** * Description of the ErrorCode. */readonly ErrorDescription:string;
/** * Reads the value of the HMITag. * @param readType Specifies if the tag value will be read from the cache (this is the default) or the PLC. * @returns Variant */
Read(readType?:hmiReadType):TagValueType;
/** * Writes the value of the tag. * @param value * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default). * @returns ErrorCode */
Write(value?:TagValueType,writeType?:hmiWriteType):ErrorCode;
/** * Increases the value of the tag by the specified number. * @param value Must be a numeric type. * @returns PromiseParameterRejErrorCode */
Increase(value:Float):PromiseParameterRejErrorCode;
/** * Decreases the value of the tag by the specified number. * @param value Must be a numeric type. * @returns PromiseParameterRejErrorCode */
Decrease(value:Float):PromiseParameterRejErrorCode;
/** * Sets the specified bit in the tag. * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag). * @returns PromiseParameterRejErrorCode */
SetBit(BitNumber:UInt8):PromiseParameterRejErrorCode;
/** * Clears the specified bit in the tag. * @param BitNumber BitNumber has a range from 0 to 63 (depending on the datatype of the tag). * @returns PromiseParameterRejErrorCode */
ResetBit(BitNumber:UInt8):PromiseParameterRejErrorCode;
/** * This function, in script, can be used to raise system event for tag value change based on tag write success or faliure. * @param value Specifies value to write for tag. * @param reason Specifies Reason for change in value. * @returns ErrorCode */
WriteWithOperatorMessage(value:TagValueType,reason:string):ErrorCode;
/** * Writes the value of the tag taking qualityCode and Timestamp as input. * @param value * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default). * @param TimeStamp * @param QualityCode * @returns ErrorCode */
WriteQCD(value?:TagValueType,writeType?:hmiWriteType,TimeStamp?:DateTime,QualityCode?:UInt32):ErrorCode;}
/** * Object model TagSet. */interface HMITagSet{
/** * The number of HMITags in the HMITagSet. */readonly Count:UInt32;
/** * The error code of the last method call. */readonly LastError:ErrorCode;
/** * The error description of the last method call. */readonly ErrorDescription:string;
/** * Accesses a HMITag object within the TagSet. * @param name TagName or index (1..n). * @returns HMITag */<TagName extends string>(name:TagName|Int32):HMITag<TagName,TagValueType<TagName>>;
/** * Accesses a HMITag object within the TagSet. * @param name TagName or index (1..n). * @returns HMITag */
Item<TagName extends string>(name:TagName|Int32):HMITag<TagName,TagValueType<TagName>>;
/** * Adds a HMITag to the TagSet. * @param tag This is either the name of a tag, an array of tag names or a two dimensional array of tag name / value pairs. . * @returns HMITag[] */
Add(tag:TagName|TagName[]|[TagName,Variant][]):HMITag[];
/** * Removes a HMITag from the TagSet. * @param tag This is either the name of a tag(s), an array of tag names or a two dimensional array of tag name / value pairs. * @returns void */
Remove(tag:TagName|TagName[]|[TagName,Variant][]):void;
/** * Reads the values of all HMITags in the TagSet. * @param readType Specifies if the tag values will be read from the cache (this is the default) or the PLC. * @returns void */
Read(readType?:hmiReadType):void;
/** * Reads the values either from the process image or the PLC and makes sure the values are not older than maxAge. * @param maxAge TimeSpan in ms. * @returns PromiseParameterTagSet */
ReadMaxAge(maxAge:UInt32):PromiseParameterTagSet;
/** * Reads the values of all HMITags in the TagSet asynchronously using a Promise object. * @param readType Specifies if the tag values will be read from the cache (this is the default) or the PLC. * @returns PromiseParameterTagSet */
ReadAsync(readType?:hmiReadType):PromiseParameterTagSet;
/** * Writes the values of all HMITags in the TagSet. * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default). * @returns void */
Write(writeType?:hmiWriteType):void;
/** * Writes the values of all HMITags in the TagSet asynchronously using a Promise object. * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default). * @returns PromiseParameterTagSet */
WriteAsync(writeType?:hmiWriteType):PromiseParameterTagSet;
/** * Removes all HMITags from the TagSet. * @returns void */
Clear():void;
/** * This function, in script, can be used to raise system event on the tag value change based on tag write success or faliure. * @param reason Specifies Reason for change in value. * @returns ErrorCode */
WriteWithOperatorMessage(reason:string):ErrorCode;
/** * Writes the values of all HMITags in the TagSet taking QualityCode and Timestamp as inputs. * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default). * @returns void */
WriteQCD(writeType?:hmiWriteType):void;
/** * Writes the values of all HMITags in the TagSet asynchronously using a Promise object. * @param writeType Specifies if the function waits until the value has been written to the PLC (hmiWriteWait) or if it won't wait (hmiWriteNoWait, this is the default). * @returns PromiseParameterTagSet */
WriteAsyncQCD(writeType?:hmiWriteType):PromiseParameterTagSet;}
/** * Object model TagResult. */interface HMITagResult{
/** * Name of the HMITag. */readonly Name:TagName;
/** * Value of the HMITag. */
Value:Variant;
/** * QualityCode of the Value. */
QualityCode:UInt32;
/** * TimeStamp of the Value. */
TimeStamp:DateTime;
/** * ErrorCode of the previous Read or Write operation. */readonly LastError:ErrorCode;
/** * Description of the ErrorCode. */readonly ErrorDescription:string;}
/** * Object model TagSubscription. */interface HMITagSubscription{
/** * Subscribe for tag changes. * @returns ErrorCode */
Start():ErrorCode;
/** * To cancel subscription for tags. * @returns ErrorCode */
Stop():ErrorCode;}
/** * Object model HMIRuntime.Tags.Inching. */interface HMITagInching{readonly SysFct:HMITagInchingSysFct;}
/** * Object model HMIRuntime.Tags. */interface HMITags{
/** * Returns a HMITag object. * @param tagName Name of the HMITag. * @returns HMITag */<TagName extends string>(tagName:TagName):HMITag<TagName,TagValueType<TagName>>;
/** * Returns a HMITag object. * @param tagName Name of the HMITag. * @returns HMITag */
Item<TagName extends string>(tagName:TagName):HMITag<TagName,TagValueType<TagName>>;
/** * Creates a HMITagSet object. * @param tagNameArray Array of TagNames or just a single TagName. * @returns HMITagSet */
CreateTagSet(tagNameArray?:TagName|TagName[]):HMITagSet;
/** * Creates a new tag subscription. * @param tagNameArray Array of TagNames or just a single TagName. * @param OnTag Array of TagNames or just a single TagName. * @returns HMITagSubscription */
CreateSubscription(tagNameArray:TagName|TagName[],OnTag:HMIOnTagCB):HMITagSubscription;readonly SysFct:HMITagSysFct;readonly Enums:HMITagsEnums;readonly Inching:HMITagInching;}
/** * Object model SetTagCommand. */interface HMISetTagCommand{
/** * Used as helper function for SystemFunctions to set Tag Values. * @param Value * @returns ErrorCode */(Value:Variant):ErrorCode;
/** * Used as helper function for SystemFunctions to set Tag Values. * @param Value * @returns ErrorCode */
SetValue(Value:Variant):ErrorCode;}
/** * Object model GetAndClearTagCommand. */interface HMIGetAndClearTagCommand extends HMIGetAndClearValueCommandBase{
/** * Used as helper function for SystemFunctions to get and clear a tag value. * @returns Variant */():Variant;
/** * Used as helper function for SystemFunctions to get and clear a tag value. * @returns Variant */
GetAndClearValue():Variant;}
/** * Object model TriggerTagData. */interface HMITagTriggerData{
/** * Name of the TriggerTag. */readonly Name:string;
/** * Indicates TriggerTag changed or not. */readonly HasChanged:boolean;
/** * The value of the TriggerTag. */readonly Value:Variant;
/** * QualityCode of the Value. */readonly QualityCode:UInt32;
/** * TimeStamp of the Value. */readonly TimeStamp:DateTime;}
/** * Object model TagTriggerDataSet. */interface HMITagTriggerDataSet{
/** * The number of HMITagTriggerData in the HMITagTriggerDataSet. */readonly Count:UInt32;
/** * Accesses a HMITagTriggerData object within the HMITagTriggerDataSet. * @param name TriggerTag name. * @returns HMITagTriggerData */(name:string):HMITagTriggerData;
/** * Accesses a HMITagTriggerData object within the HMITagTriggerDataSet. * @param name TriggerTag name. * @returns HMITagTriggerData */
Item(name:string):HMITagTriggerData;}
/** * Object model HMIRuntime.Timers. */interface HMITimers{
/** * Execute function at specified intervals.It will return timer object id. * @param CallbackFunction The Function to be executed at specific intervals. Function prototype: TimerCallback(). * @param DelayInMillisecs The intervals (in milliseconds) on how often to execute the code. * @returns Int32 */
SetInterval(CallbackFunction:HMIOnTimerCB,DelayInMillisecs:UInt32):Int32;
/** * Takes timer object ID from SetInterval and clears the interval set by SetInterval. * @param TimerID The ID of the timer object to stop execution. * @returns void */
ClearInterval(TimerID:Int32):void;
/** * To delay execution of function for a specific amount of time(in milliseconds) and returns ID of the timer. * @param CallbackFunction The function to be executed after specified time interval has expired. Function prototype: TimerCallback(). * @param DelayInMillisecs The number of milliseconds to wait before executing the code. * @returns Int32 */
SetTimeout(CallbackFunction:HMIOnTimerCB,DelayInMillisecs:UInt32):Int32;
/** * It takes timer id from SetTimeout and clears the interval set by SetTimeout. * @param TimerID The ID of the timer object to stop execution. * @returns void */
ClearTimeout(TimerID:Int32):void;}
/** * Object model HMIRuntime.UI. */interface HMIUI{
/** * The screen which has the input focus. */readonly ActiveScreen:HmiScreen;
/** * The collection of the top level screen windows. */readonly Windows:HMITopLevelWindows;
/** * The collection of the pop up screen windows. */readonly PopupScreenWindows:HMIPopupScreenWindows;
/** * The current TopLevelWindow in the context of the script.This is the same as UI.FindItem('~'). */readonly RootWindow:HmiTopLevelScreenWindow;
/** * The style of the screens and screen items. */
Style:string;
/** * Dataset object for session-global data. */readonly DataSet:HMIDataSet;
/** * Default color palette of the current session. */
DefaultColorPalette:string;
/** * Returns item (screen item / part) by screen item path. * @param screenItemPath * @returns HmiScreenObjectBase */
FindItem(screenItemPath:string):HmiScreenObjectBase;
/** * Opens the faceplate in a Popup Window and sets the values of the interface properties. * @param faceplateType * @param title * @param interface * @param parentScreen * @param invisible Set this parameter to 'true' to create the Faceplate invisible. * @returns HmiPopupScreenWindow */
OpenFaceplateInPopup(faceplateType:FaceplateTypeName,title:string,interface:object,parentScreen?:HmiScreen,invisible?:boolean):HmiPopupScreenWindow;
/** * Returns client information based on the requested info type. * @param infoType Type of client information requested (HmiClientInfoType enumeration). * @returns Variant */
GetClientInfo(infoType:HmiClientInfoType):Variant;readonly Enums:HmiUIEnums;readonly Alarm:HMIUIAlarm;readonly ProDiag:HMIUIProDiag;readonly SysDiag:HMIUISysDiag;readonly SysFct:HMIUISysFct;}
/** * Object model Windows. */interface HMIWindows{
/** * The number of screen windows in the collection. */readonly Count:UInt32;
/** * Used to access the Windows collection. * @param WindowName Name of the screen window. * @returns HmiScreenWindow */(WindowName:string):HmiScreenWindow;
/** * Used to access the Windows collection. * @param WindowName Name of the screen window. * @returns HmiScreenWindow */
Item(WindowName:string):HmiScreenWindow;}
/** * Object model TopLevelWindows. */interface HMITopLevelWindows{
/** * The number of top level windows in the collection. */readonly Count:UInt32;
/** * Used to access the top level Windows collection. * @param WindowName Name of the top level screen window. * @returns HmiTopLevelScreenWindow */(WindowName:string):HmiTopLevelScreenWindow;
/** * Used to access the top level Windows collection. * @param WindowName Name of the top level screen window. * @returns HmiTopLevelScreenWindow */
Item(WindowName:string):HmiTopLevelScreenWindow;}
/** * Object model ScreenWindowInterface. */interface HMIScreenWindowInterface{
/** * The absolute window path, starting at the top level window. */readonly Path:string;
/** * The screen object hosted in the window. */readonly CurrentScreen:HmiScreen;
/** * The name of the screen which is displayed in the window. Also used to load a different screen in the window. */
Screen:string;
/** * Closes the ScreenWindow. * @returns boolean */
Close():boolean;}
/** * Object model PopupScreenWindowAddProps. */interface HMIPopupScreenWindowAddProps extends HmiScreenWindow{
/** * The monitor number of the window. */readonly Monitor:UInt8;
/** * The startup position of the window. */
StartupPosition:HmiWindowStartupPosition;}
/** * Object model ScreenObjectBaseInterface. */interface HMIScreenObjectBaseInterface{
/** * Parent container. */readonly Parent:HmiScreenObjectBase;
/** * Configures the flashing of the given property. Returns true if successful. * @param propertyName Name of the property where flashing should be configured. * @param enable If true flashing will be activated. * @param value Property value for flashing. When ommited the exsiting value will be used. * @param alternateValue Alternate property value for flashing. When ommited the exsiting alternate value will be used. * @param rate Rate of flashing. When ommited the existing rate or HmiFlashingRate.Medium will be used. * @returns boolean */
PropertyFlashing(propertyName:string,enable:boolean,value?:Variant,alternateValue?:Variant,rate?:HmiFlashingRate):boolean;
/** * Returns true if the current user is authorized to operate this object. * @returns boolean */
CheckAuthorization():boolean;}
/** * Object model ScreenObjectBase. */interface HmiScreenObjectBase extends HMIScreenObjectBaseInterface{}
/** * Object model ScreenItemInterface. */interface HMIScreenItemInterface{
/** * Parent container. */readonly Parent:HmiScreen;
/** * Configures the flashing of the given property. Returns true if successful. * @param propertyName Name of the property where flashing should be configured. * @param enable If true flashing will be activated. * @param value Property value for flashing. When ommited the exsiting value will be used. * @param alternateValue Alternate property value for flashing. When ommited the exsiting alternate value will be used. * @param rate Rate of flashing. When ommited the existing rate or HmiFlashingRate.Medium will be used. * @returns boolean */
PropertyFlashing(propertyName:string,enable:boolean,value?:Variant,alternateValue?:Variant,rate?:HmiFlashingRate):boolean;
/** * Returns true if the current user is authorized to operate this item. * @returns boolean */
CheckAuthorization():boolean;}
/** * Object model ScreenItemBase. */interface HmiScreenItemBase extends HMIScreenItemInterface{}
/** * Object model ScreenInterface. */interface HMIScreenInterface{
/** * The collection of the screen items in this screen. */readonly Items:HMIScreenItems;
/** * The collection of the screen windows in this screen. */readonly Windows:HMIWindows;
/** * The container window of the screen. */readonly CurrentWindow:HmiScreenWindow;
/** * Parent screen in which the parent container window is shown. */readonly ParentScreen:HmiScreen;
/** * Dataset object for screen-global data. */readonly DataSet:HMIDataSet;
/** * Parent container. */readonly Parent:HmiScreenWindow;
/** * Returns item (screen item / part) by screen item path. * @param screenItemPath * @returns HmiScreenObjectBase */
FindItem(screenItemPath:string):HmiScreenObjectBase;
/** * Configures the flashing of the given property. Returns true if successful. * @param propertyName Name of the property where flashing should be configured. * @param enable If true flashing will be activated. * @param value Property value for flashing. When ommited the exsiting value will be used. * @param alternateValue Alternate property value for flashing. When ommited the exsiting alternate value will be used. * @param rate Rate of flashing. When ommited the existing rate or HmiFlashingRate.Medium will be used. * @returns boolean */
PropertyFlashing(propertyName:string,enable:boolean,value?:Variant,alternateValue?:Variant,rate?:HmiFlashingRate):boolean;}
/** * Object model FaceplateInterface. */interface HMIFaceplateInterface{
/** * Parent container. */readonly Parent:HmiFaceplateContainer;
/** * The collection of the screen items in this faceplate. */readonly Items:HMIScreenItems<ScreenItemKindFaceplate>;
/** * Returns item (screen item / part) by screen item path. * @param screenItemPath * @returns HmiScreenObjectBase */
FindItem(screenItemPath:string):HmiScreenObjectBase;
/** * Opens the faceplate in a new Popup Window. * @param faceplateType * @param title * @param independentWindow When 'true' the lifetime of the PopUp is decoupled from the lifetime of the calling Faceplate. * @param invisible Set this parameter to 'true' to create the Faceplate invisible. * @returns HmiPopupScreenWindow */
OpenFaceplateInPopup(faceplateType:FaceplateTypeName,title:string,independentWindow?:boolean,invisible?:boolean):HmiPopupScreenWindow;
/** * Configures the flashing of the given property. Returns true if successful. * @param propertyName Name of the property where flashing should be configured. * @param enable If true flashing will be activated. * @param value Property value for flashing. When ommited the exsiting value will be used. * @param alternateValue Alternate property value for flashing. When ommited the exsiting alternate value will be used. * @param rate Rate of flashing. When ommited the existing rate or HmiFlashingRate.Medium will be used. * @returns boolean */
PropertyFlashing(propertyName:string,enable:boolean,value?:Variant,alternateValue?:Variant,rate?:HmiFlashingRate):boolean;
/** * Closes the FaceplateContainer (by setting it invisible) or the PopupWindow. * @returns boolean */
Close():boolean;
/** * Raises a custom event of the faceplate. * @param name * @param parameters * @returns boolean */
RaiseEvent(name:string,parameters:object):boolean;}
/** * Object model ScreenItems. */interface HMIScreenItems<ScreenItemKind=ScreenItemKindScreen>{
/** * Used to access the ScreenItems collection. * @param ScreenItemName Name of a screen item. * @returns HmiScreenItemBase */<ScreenItemName extends string,ItemType extends ScreenItemKindSelector<ScreenItemName,ScreenItemKind>>(ScreenItemName:ScreenItemName):ItemType&HmiScreenItemBase;
/** * Used to access the ScreenItems collection. * @param ScreenItemName Name of a screen item. * @returns HmiScreenItemBase */
Item<ScreenItemName extends string,ItemType extends ScreenItemKindSelector<ScreenItemName,ScreenItemKind>>(ScreenItemName:ScreenItemName):ItemType&HmiScreenItemBase;}
/** * Object model AlarmBlockResult. */interface HMIAlarmBlockResult{
/** * Instance ID of Alarm. */readonly ID:UInt32;
/** * Name of the alarm. */readonly Name:string;
/** * Name of the alarm class. */readonly AlarmClassName:string;
/** * Symbol of the alarm class. */readonly AlarmClassSymbol:string;
/** * State of the alarm. */readonly State:UInt32;
/** * Time of alarm modified. */readonly ModificationTime:DateTime;
/** * Time when alarm was raised. */readonly RaiseTime:DateTime;
/** * Time of alarm acknowledgement. */readonly AcknowledgmentTime:DateTime;
/** * Time of clearing alarm. */readonly ClearTime:DateTime;
/** * Time of resetting alarm. */readonly ResetTime:DateTime;
/** * State of whether alarm is suppressed from viewing or not. */readonly SuppressionState:UInt8;
/** * Priority of alarm. */readonly Priority:UInt8;
/** * Text for the alarm event. */readonly EventText:string;
/** * Text for the alarm. */readonly AlarmText1:string;
/** * Text for the alarm. */readonly AlarmText2:string;
/** * Text for the alarm. */readonly AlarmText3:string;
/** * Text for the alarm. */readonly AlarmText4:string;
/** * Text for the alarm. */readonly AlarmText5:string;
/** * Text for the alarm. */readonly AlarmText6:string;
/** * Text for the alarm. */readonly AlarmText7:string;
/** * Text for the alarm. */readonly AlarmText8:string;
/** * Text for the alarm. */readonly AlarmText9:string;
/** * Value of an alarm. */readonly ProcessValue1:Variant;
/** * Value of an alarm. */readonly ProcessValue2:Variant;
/** * Value of an alarm. */readonly ProcessValue3:Variant;
/** * Value of an alarm. */readonly ProcessValue4:Variant;
/** * Value of an alarm. */readonly ProcessValue5:Variant;
/** * Value of an alarm. */readonly ProcessValue6:Variant;
/** * Value of an alarm. */readonly ProcessValue7:Variant;
/** * Value of an alarm. */readonly ProcessValue8:Variant;
/** * Value of an alarm. */readonly ProcessValue9:Variant;
/** * Value of an alarm. */readonly ProcessValue10:Variant;
/** * Origin of Alarm. */readonly Origin:string;
/** * Area of the generated alarm. */readonly Area:string;
/** * Value for alarm. */readonly Value:Variant;
/** * Quality of generated alarm value. */readonly ValueQuality:UInt16;
/** * Limit of alarm value. */readonly ValueLimit:Variant;
/** * User name in case of operator input alarms. */readonly UserName:string;
/** * The "Loop In Alarm" function is used to visualize a measuring point which triggered an alarm in a loop display on the faceplate, or as process picture that has been linked in the Component List Editor. */readonly LoopInAlarm:string;
/** * Alarm Group ID for PLC Alarm. */readonly AlarmGroupID:UInt8;
/** * Duration of alarm. */readonly Duration:Time;
/** * Name of the machine that hosts the originator of the alarm. */readonly HostName:string;
/** * Text information. */readonly InfoText:string;
/** * Alarm statistics result. */readonly Frequency:UInt32;
/** * Alarm statistics result. */readonly SumActiveInactive:string;
/** * Alarm statistics result. */readonly AverageActiveInactive:string;
/** * Alarm statistics result. */readonly SumActiveAcknowledged:string;
/** * Alarm statistics result. */readonly AverageActiveAcknowledged:string;
/** * Alarm statistics result. */readonly SumActiveActive:string;
/** * Alarm statistics result. */readonly AverageActiveActive:string;
/** * Instance ID of Alarm. */readonly InstanceID:UInt32;
/** * State of the alarm. */readonly StateText:string;}
/** * Object model HMIRuntime.UI.Alarm.SysFct. */interface HMIUIAlarmSysFct{
/** * Call the "ExecuteToolbarButton" function of an Alarm Control. * @param screenItemPath * @param alarmControlID * @returns ErrorCode */
ExecuteToolbarButton(screenItemPath:string,alarmControlID:HmiAlarmControlID):ErrorCode;}
/** * Object model HMIRuntime.UI.Alarm. */interface HMIUIAlarm{
/** * Get all alarm attributes of a chosen alarm in the alarm control. * @param PathAlarmControl * @returns PromiseParameterAlarmBlockResult */
GetSelectedAlarmAttributes(PathAlarmControl:string):PromiseParameterAlarmBlockResult;}
/** * Object model HMIRuntime.UI.ProDiag.ProdiagOverview.SysFct. */interface HMIUIProDiagOverviewSysFct{
/** * Call the "ExecuteToolbarButton" function of a prodiag overview. * @param screenItemPath Path of the Process Diagnosis Overview Control. * @param prodiagControlID Specifies the Control ID of Process Diagnosis Overview Control. * @returns ErrorCode */
ExecuteToolbarButton(screenItemPath:string,prodiagControlID:HmiProcessDiagnosisOverviewControlID):ErrorCode;}
/** * Object model HMIRuntime.UI.ProDiag.ProdiagOverview. */interface HMIUIProDiagOverview{readonly SysFct:HMIUIProDiagOverviewSysFct;}
/** * Object model HMIRuntime.UI.ProDiag.GraphOverview.SysFct. */interface HMIUIGraphOverviewSysFct{
/** * Call the "ExecuteToolbarButton" function of a prodiag graph overview. * @param screenItemPath Path of the Process Diagnosis Graph Overview Control. * @param graphOverviewControlID Specifies the Control ID of Process Diagnosis Graph Overview Control. * @returns ErrorCode */
ExecuteToolbarButton(screenItemPath:string,graphOverviewControlID:HmiProcessDiagnosisGraphOverviewControlID):ErrorCode;}
/** * Object model HMIRuntime.UI.ProDiag.GraphOverview. */interface HMIUIGraphOverview{readonly SysFct:HMIUIGraphOverviewSysFct;}
/** * Object model HMIRuntime.UI.ProDiag.CodeViewer.SysFct. */interface HMIUICodeViewerSysFct{
/** * Call the "ExecuteToolbarButton" function of a prodiag codeviewer. * @param screenItemPath Path of the Process Diagnosis PLC code viewer Control. * @param codeViewerControlID Specifies the Control ID of Process Diagnosis PLC code viewer Control. * @returns ErrorCode */
ExecuteToolbarButton(screenItemPath:string,codeViewerControlID:HmiProcessDiagnosisPlcCodeViewerControlID):ErrorCode;}
/** * Object model HMIRuntime.UI.ProDiag.CodeViewer. */interface HMIUICodeViewer{readonly SysFct:HMIUICodeViewerSysFct;}
/** * Object model HMIRuntime.UI.ProDiag.SysFct. */interface HMIUIProDiagSysFct{
/** * Jump to PLC Code Viewer to show a S7-GRAPH step. . * @param plcName The name of the PLC. * @param graphBlockName The name of the graph block. * @param stepNumber The step number. * @param screenItemPath The path to the Code Viewer Control. * @returns ErrorCode */
OpenViewerGraphByBlock(plcName:string,graphBlockName:string,stepNumber:UInt32,screenItemPath:string):ErrorCode;
/** * Jump to PLC Code Viewer from Graph Overview Control . * @param screenItemPathOverviewControl The path to the Graph Overview Control . * @param screenItemPathCodeViewer The path to the Code Viewer Control . * @returns ErrorCode */
OpenViewerGraphFromOverview(screenItemPathOverviewControl:string,screenItemPathCodeViewer:string):ErrorCode;
/** * Execute "Next" command in PLC Code Viewer . * @param screenItemPathCodeViewer The path to the Code Viewer Control . * @returns ErrorCode */
Next(screenItemPathCodeViewer:string):ErrorCode;
/** * Execute "Previous" command in PLC Code Viewer . * @param screenItemPathCodeViewer The path to the Code Viewer Control . * @returns ErrorCode */
Previous(screenItemPathCodeViewer:string):ErrorCode;
/** * Execute "ToggleCriteriaAnalysis" command in PLC Code Viewer . * @param screenItemPathCodeViewer The path to the Code Viewer Control . * @returns ErrorCode */
ToggleCriteriaAnalysis(screenItemPathCodeViewer:string):ErrorCode;
/** * Execute "ToggleGRAPHViewerMode" command in PLC Code Viewer . * @param screenItemPathCodeViewer The path to the Code Viewer Control . * @returns ErrorCode */
ToggleGRAPHViewerMode(screenItemPathCodeViewer:string):ErrorCode;
/** * Execute "ToggleNetworkDisplay" command in PLC Code Viewer . * @param screenItemPathCodeViewer The path to the Code Viewer Control . * @returns ErrorCode */
ToggleNetworkDisplay(screenItemPathCodeViewer:string):ErrorCode;
/** * Execute "Zoom in" command in the PLC Code Viewer . * @param screenItemPathCodeViewer The path to the Code Viewer Control . * @returns ErrorCode */
ZoomIn(screenItemPathCodeViewer:string):ErrorCode;
/** * Execute "Zoom out" command in PLC Code Viewer . * @param screenItemPathCodeViewer The path to the Code Viewer Control . * @returns ErrorCode */
ZoomOut(screenItemPathCodeViewer:string):ErrorCode;
/** * Show the preceding logic of a network input of a standard block in the PLC Code Viewer Control. . * @param pinSubstringSearch If true, the pin name starts with the the passed pin parameter. If false, the pin name must be the same as the pin parameter. * @param plcName The name of the PLC. * @param containingBlock The name of the containing block. * @param calledBlock The name  of the local or global instance called in the code block belonging to ContainingBlock. * @param pin The name of the input pin of CalledBlock. * @param screenItemPath The path to the PLC Code Viewer Control. * @returns ErrorCode */
OpenProDiagDetailsByCall(pinSubstringSearch:boolean,plcName:string,containingBlock:string,calledBlock:string,pin:string,screenItemPath:string):ErrorCode;
/** * Show the preceding logic of a network input of a standard block in the PLC Code Viewer Control, while taking the UDT instance into consideration. . * @param pinSubstringSearch If true, the pin name starts with the the passed pin parameter. If false, the pin name must be the same as the pin parameter. * @param plcName The name of the PLC. * @param containingBlock The name of the containing block. * @param calledBlock The name of the FC called in the code block belonging to ContainingBlock. * @param pin The name of the input pin of CalledBlock. * @param UdtInstance The UDT instance used to limit the display of FCs called multiple times. * @param screenItemPath The path to the PLC Code Viewer Control. * @returns ErrorCode */
OpenPlcCodeViewByFCCall(pinSubstringSearch:boolean,plcName:string,containingBlock:string,calledBlock:string,pin:string,UdtInstance:string,screenItemPath:string):ErrorCode;
/** * Show the assignment of an operand and its preceding logic in the PLC Code Viewer Control. . * @param plcName The name of the PLC. * @param containingBlock The name of the containing block. * @param operand The operand. * @param screenItemPath The path to the PLC Code Viewer Control. * @returns ErrorCode */
OpenProDiagDetailsByAssignment(plcName:string,containingBlock:string,operand:string,screenItemPath:string):ErrorCode;
/** * Checks if the selected alarm in alarmcontrol is ProDiag alarm. If yes the given screen item will be enabled otherwise disabled. * @param AlarmView Path to the Alarm View with selected alarm. * @param screenItemPath Path to the ScreenItem. * @returns ErrorCode */
IsJumpableAlarm(AlarmView:string,screenItemPath:ScreenItemName):ErrorCode;
/** * Jumps to the PLC Code Viewer Block by the provided selected Alarm information. * @param AlarmView The path to the alarm control. * @param PlcCodeView The path to the PLC Code Viewer. * @returns ErrorCode */
OpenPlcCodeViewFromAlarm(AlarmView:string,PlcCodeView:string):ErrorCode;}
/** * Object model HMIRuntime.UI.ProDiag. */interface HMIUIProDiag{
/** * Opens a TIA Portal project. * @param DontUseModifiedProject Don't open the project, if already a modified project is opened. * @param ReadOnly Open the project as read-only. * @param pathToProject The path to the TIA Portal project. * @returns ErrorCode */
OpenTIAPortalProject(DontUseModifiedProject:boolean,ReadOnly:boolean,pathToProject:string):ErrorCode;
/** * Opens a TIA Portal project and jumps into GRAPH Details. * @param DontUseModifiedProject Don't open the project, if already a modified project is opened. * @param ReadOnly Open the project as read-only. * @param Online Goes into online mode after the block is opened. * @param PlcName The name of the PLC. * @param Block The name of the containing Block. * @param pathToProject The path to the TIA Portal project. * @returns ErrorCode */
OpenTIAPortalGRAPHDetails(DontUseModifiedProject:boolean,ReadOnly:boolean,Online:boolean,PlcName:string,Block:string,pathToProject:string):ErrorCode;
/** * Opens a TIA Portal project and jumps into GRAPH Details. * @param DontUseModifiedProject Don't open the project, if already a modified project is opened. * @param ReadOnly Open the project as read-only. * @param Online Goes into online mode after the block is opened. * @param PlcName The name of the PLC. * @param ContainingBlock The name of the containing Block. * @param CalledBlock The name of the called Block. * @param Pin The PIN for the entrypoint. * @param pathToProject The path to the TIA Portal project. * @returns ErrorCode */
OpenTIAPortalProDiagDetailsByCall(DontUseModifiedProject:boolean,ReadOnly:boolean,Online:boolean,PlcName:string,ContainingBlock:string,CalledBlock:string,Pin:string,pathToProject:string):ErrorCode;
/** * Opens a TIA Portal project and jumps into GRAPH Details. * @param DontUseModifiedProject Don't open the project, if already a modified project is opened. * @param ReadOnly Open the project as read-only. * @param Online Goes into online mode after the block is opened. * @param PlcName The name of the PLC. * @param Block The name of the containing Block. * @param Operand The operand for the entry point. * @param pathToProject The path to the TIA Portal project. * @returns ErrorCode */
OpenTIAPortalProDiagDetailsByAssignment(DontUseModifiedProject:boolean,ReadOnly:boolean,Online:boolean,PlcName:string,Block:string,Operand:string,pathToProject:string):ErrorCode;
/** * Opens a TIA Portal project and jumps into GRAPH Details. * @param DontUseModifiedProject Don't open the project, if already a modified project is opened. * @param ReadOnly Open the project as read-only. * @param Online Goes into online mode after the block is opened. * @param AlarmView The path to the TIA Portal Alarm View. * @param pathToProject The path to the TIA Portal project. * @returns ErrorCode */
OpenTIAPortalFromAlarm(DontUseModifiedProject:boolean,ReadOnly:boolean,Online:boolean,AlarmView:string,pathToProject:string):ErrorCode;readonly ProdiagOverview:HMIUIProDiagOverview;readonly GraphOverview:HMIUIGraphOverview;readonly CodeViewer:HMIUICodeViewer;readonly SysFct:HMIUIProDiagSysFct;}
/** * Object model HMIRuntime.UI.SysDiag.SysFct. */interface HMIUISysDiagSysFct{
/** * Call the "GoToPlc" function of a System Diagnostics Control. . * @param screenItemPath The path of the System Diagnostics Control. * @returns ErrorCode */
GoToPlc(screenItemPath:string):ErrorCode;
/** * Call the "ExecuteToolbarButton" function of a System Diagnostics Control. * @param screenItemPath * @param systemDiagnosisControlID * @returns ErrorCode */
ExecuteToolbarButton(screenItemPath:string,systemDiagnosisControlID:HmiSystemDiagnosisControlID):ErrorCode;}
/** * Object model HMIRuntime.UI.SysDiag. */interface HMIUISysDiag{readonly SysFct:HMIUISysDiagSysFct;}
/** * Object model HMIRuntime.UI.SysFct. */interface HMIUISysFct{
/** * Changes screen in a screenwindow. * @param screenName Name of new screen. * @param screenWindowPath Name of the ScreenWindow in which to change the screen. * @returns ErrorCode */
ChangeScreen(screenName:string,screenWindowPath:string):ErrorCode;
/** * Sets a property of a screen item. * @param screenItemPath Path to the ScreenItem. * @param screenItemPropertyName Property name of the screenitem. * @param value Value to set to the screen item property. * @returns ErrorCode */
SetPropertyValue(screenItemPath:ScreenItemName,screenItemPropertyName:string,value:Variant):ErrorCode;
/** * Changes the language of the runtime. * @param lcid LCID of the new language. * @returns ErrorCode */
SetLanguage(lcid:UInt32):ErrorCode;
/** * Open a Screen in a PopupWindow. * @param popupWindowName Name of the PopupWindow. The name must be unique within the scope of the parentScreen. * @param screenName Name of the screen to load in the PopupWindow. * @param toggleOpen When toggleOpen=true the popup window will be closed if it is opened again. * @param caption The window title of the PopupWindow. * @param left Window position: offset from left margin. * @param top Window position: offset from top margin. * @param hideCloseButton When hideCloseButton=true the close button will be hidden. * @param parentScreenPath Path to the parent HmiScreen. When empty the Popup will be a global Popup. * @returns ErrorCode */
OpenScreenInPopup(popupWindowName:string,screenName:string,toggleOpen:boolean,caption:string,left:Int32,top:Int32,hideCloseButton:boolean,parentScreenPath?:string):ErrorCode;
/** * Sets the runtime language to the next one, according to the list of configured RT languages. * @returns ErrorCode */
ToggleLanguage():ErrorCode;
/** * Closes a PopupWindow. * @param popupWindowPath The path of the PopupWindow. * @returns ErrorCode */
ClosePopup(popupWindowPath:string):ErrorCode;
/** * Logs off the current logged in user. * @returns ErrorCode */
LogOff():ErrorCode;
/** * Changes screen in a screenwindow asynchronously. * @param screenName Name of new screen. * @param screenWindowPath Name of the ScreenWindow in which to change the screen. * @returns PromiseParameterRejErrorCode */
ChangeScreenAsync(screenName:string,screenWindowPath:string):PromiseParameterRejErrorCode;
/** * Changes screen in a screen window. * @param screenNumber Number of new screen. * @param screenWindowPath Name of the ScreenWindow in which to change the screen. * @returns PromiseParameterRejErrorCode */
ChangeScreenAsyncByNumber(screenNumber:UInt32,screenWindowPath:string):PromiseParameterRejErrorCode;
/** * Changes screen in a screen window. * @param screenNumber Number of new screen. * @param screenWindowPath Name of the ScreenWindow in which to change the screen. * @returns ErrorCode */
ChangeScreenByNumber(screenNumber:UInt32,screenWindowPath:string):ErrorCode;
/** * Open a Screen in a PopupWindow. * @param popupWindowName Name of the PopupWindow. The name must be unique within the scope of the parentScreen. * @param screenNumber Number of the screen to load in the PopupWindow. * @param toggleOpen When toggleOpen=true the popup window will be closed if it is opened again. * @param caption The window title of the PopupWindow. * @param left Window position: offset from left margin. * @param top Window position: offset from top margin. * @param hideCloseButton When hideCloseButton=true the close button will be hidden. * @param parentScreenPath Path to the parent HmiScreen. When empty the Popup will be a global Popup. * @returns ErrorCode */
OpenScreenByNumberInPopup(popupWindowName:string,screenNumber:UInt32,toggleOpen:boolean,caption:string,left:Int32,top:Int32,hideCloseButton:boolean,parentScreenPath?:string):ErrorCode;
/** * Open a Screen in a PopupWindow asynchronously. * @param popupWindowName Name of the PopupWindow. The name must be unique within the scope of the parentScreen. * @param screenName Name of the screen to load in the PopupWindow. * @param toggleOpen When toggleOpen=true the popup window will be closed if it is opened again. * @param caption The window title of the PopupWindow. * @param left Window position: offset from left margin. * @param top Window position: offset from top margin. * @param hideCloseButton When hideCloseButton=true the close button will be hidden. * @param parentScreenPath Path to the parent HmiScreen. When empty the Popup will be a global Popup. * @returns PromiseParameterRejErrorCode */
OpenScreenInPopupAsync(popupWindowName:string,screenName:string,toggleOpen:boolean,caption:string,left:Int32,top:Int32,hideCloseButton:boolean,parentScreenPath?:string):PromiseParameterRejErrorCode;
/** * Show the clean screen as full screen popup and disable the touch screen on panels. Popup is closed after the timeout has expired. * @param timeout Maximum timeout is 300 seconds. * @returns ErrorCode */
ActivateCleanScreen(timeout:UInt32):ErrorCode;}
/** * Object model GetAndClearScreenItemCommand. */interface HMIGetAndClearScreenItemCommand extends HMIGetAndClearValueCommandBase{
/** * Used as helper function for SystemFunctions to get and clear a screen item property. * @returns Variant */():Variant;
/** * Used as helper function for SystemFunctions to get and clear a screen item property. * @returns Variant */
GetAndClearValue():Variant;}
/** * Object model FaceplateAlias. */interface HmiFaceplateTypeAlias extends HmiFaceplateType{}
/** * Object model ScreenAlias. */interface HmiScreenAlias extends HmiScreen{}
/** * Object model UI. */interface HMIUIAlias extends HMIUI{}
/** * Object model UI. */interface HMIRuntime_UI extends HMIRuntime{
/** * The UI object model. */readonly UI:HMIUI;}
/** * Object model HMIRuntime.UserManagement.SysFct. */interface HMIUserManagementSysFct{}
/** * Object model HMIRuntime.UserManagement. */interface HMIUserManagement{
/** * Get the associated Roles from the currect user. * @returns string[] */
GetRolesFromUser():string[];
/** * The function checks whether the current user has the selected role. * @param RoleName The name of the role. * @returns boolean */
HasUserRole(RoleName:string):boolean;readonly SysFct:HMIUserManagementSysFct;}declare const HMIRuntime:HMIRuntime;
/**  Shortcut for HMIRuntime.OpcUAClient  */declare const OpcUAClient:HMIOpcUAClient;
/**  Shortcut for HMIRuntime.ParameterSetTypes  */declare const ParameterSetTypes:HMIParameterSetTypes;
/**  Shortcut for HMIRuntime.PlantModel  */declare const PlantModel:HMIPlantModel;
/**  Shortcut for HMIRuntime.Tags  */declare const Tags:HMITags;
/**  Shortcut for FaceplateAlias  */declare const Faceplate:HmiFaceplateType;
/**  Shortcut for ScreenAlias  */declare const Screen:HmiScreen;
/**  Shortcut for UI  */declare const UI:HMIUI;
/**  The name of a project object type.  */type ScreenItemName=string;
/**  The name of a project object type.  */type AlarmName=string;
/**  The name of a project object type.  */type ConnectionName=string;
/**  The name of a project object type.  */type FaceplateTypeName=string;
/**  The name of a project object type.  */type LoggedTagName=string;
/**  The name of a project object type.  */type TagName=string;
/**  An array of references.  */type ArrayOfSomRef=string[];
/**  A date.  */type DateTime=Date;
/**  A simple data type.  */type Scalar=string|number|boolean;
/**  Can be any data type.  */type Variant=boolean|string|number|ArrayBuffer|boolean[]|string[]|number[]|ArrayBuffer[];type StringStringMap=(string[])[];
/**  A time zone.  */type HmiTimeZone=Int32;
/**  An error code.  */type ErrorCode=number;
/**  A time span.  */type Time=number;
/**  Language Code Identifier  */type LCID=number;
/**  A signed 32-bit floating-point number.  */type Float=number;
/**  A signed 64-bit floating-point number.  */type Double=number;
/**  A number between 0 and 255.  */type UInt8=number;
/**  A number between -128 and 127.  */type Int8=number;
/**  A number between 0 and 65535.  */type UInt16=number;
/**  A number between -32768 and 32767.  */type Int16=number;
/**  A number between 0 and 4294967295.  */type UInt32=number;
/**  A number between -2147483648 and 2147483647.  */type Int32=number;
/**  A number between 0 and 18446744073709551615.  */type UInt64=number;
/**  A number between -9223372036854775808 and 9223372036854775807.  */type Int64=number;
/**  This type is not specified.  */type HmiControlWindowBase=any;
/**  This type is not specified.  */type HmiTrendControlBase=any;
/**  This type is not specified.  */type HmiDataGridColumnPartBase=any;
/**  This type is not specified.  */type HmiControlBarElementPartBase=any;
/**  This type is not specified.  */type HMIPopupScreenWindows=any;