Attribute VB_Name = "fmMod"
Public cn As Connection
Public rs As Recordset
Public strSQL As String
Public configData() As String
Public folderAlias As String

Sub openConn()
On Error GoTo trap
'open conn to mysql db server
Set cn = New Connection
cn.CursorLocation = adUseClient
'cn.ConnectionString = "DRIVER={MySQL ODBC 5.1 Driver};SERVER=db4free.net;DATABASE=wecom;UID=wecom; PWD=rbs1984#; option=3;"
cn.ConnectionString = "DRIVER={MySQL ODBC 5.1 Driver};SERVER=localhost;DATABASE=test;UID=root; PWD=admin; option=3;"
cn.Open
Exit Sub
trap:
MsgBox Err.Description
End Sub

Sub closeConn()
If cn.State = adStateOpen Then cn.Close
Set cn = Nothing
Set rs = Nothing

End Sub

Public Sub bindControl(rs As Recordset, control1 As Object, Optional fld As Integer = 0)
On Error Resume Next
control1.Clear
If rs.RecordCount > 0 Then rs.MoveFirst
For iCounter = 0 To rs.RecordCount - 1
DoEvents
control1.AddItem rs.Fields(fld) & ""
rs.MoveNext
Next

End Sub


Public Function readFile(filename As String, Optional readLine As Integer = 0) As String
On Error GoTo ta
Dim str1$, i As Long
Handle = FreeFile
Open filename For Input As #Handle
    If readLine = 0 Then str1 = Input$(LOF(Handle), Handle): GoTo closeFile
    'read the line number as given in param
    If readLine <> 0 Then
        Do Until EOF(Handle)
        If i = readLine Then
            Line Input #Handle, str1
            GoTo closeFile:
        End If
        i = i + 1
        Loop
    End If
closeFile:
Close #Handle

readFile = str1

Exit Function
ta:
MsgBox Err.Description
End Function

Sub readConfigIni()
On Error GoTo ta
'read sonic ini file and assign it to variables
Dim sData$
sData = readFile(App.path & "\config.ini")
configData = Split(sData, vbCrLf)
If configData(0) <> "" Then folderAlias = getDataFromIniVar(configData(0))

Exit Sub
ta:
MsgBox Err.Description
End Sub

Function getDataFromIniVar(var As String) As String
Dim sData$, pos1%, pos2%
pos1 = InStr(1, var, "[")
pos2 = InStr(1, var, "]")
sData = Mid(var, pos1 + 1, pos2 - pos1 - 1)
getDataFromIniVar = sData
End Function


Function getFolderName(path As String)
Dim fn As String
fn = StrReverse(Mid(StrReverse(path), 1, InStr(1, StrReverse(path), "\") - 1))
getFolderName = fn
End Function
