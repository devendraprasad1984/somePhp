VERSION 5.00
Object = "{F9043C88-F6F2-101A-A3C9-08002B2F49FB}#1.2#0"; "COMDLG32.OCX"
Begin VB.Form frmLoadProfile 
   BackColor       =   &H00FFFFFF&
   Caption         =   "Profile Loader"
   ClientHeight    =   7065
   ClientLeft      =   60
   ClientTop       =   390
   ClientWidth     =   9915
   LinkTopic       =   "Form1"
   LockControls    =   -1  'True
   ScaleHeight     =   7065
   ScaleWidth      =   9915
   StartUpPosition =   2  'CenterScreen
   Begin VB.ListBox lstReg 
      Appearance      =   0  'Flat
      Height          =   2565
      Left            =   120
      TabIndex        =   51
      Top             =   480
      Visible         =   0   'False
      Width           =   4395
   End
   Begin VB.CommandButton cmdResetAll 
      Caption         =   "CLR"
      Height          =   375
      Left            =   4560
      TabIndex        =   50
      Top             =   120
      Width           =   495
   End
   Begin MSComDlg.CommonDialog comm1 
      Left            =   8460
      Top             =   120
      _ExtentX        =   847
      _ExtentY        =   847
      _Version        =   393216
   End
   Begin VB.TextBox tRegUserId 
      Appearance      =   0  'Flat
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   13.5
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H000000C0&
      Height          =   480
      Left            =   120
      TabIndex        =   27
      Top             =   60
      Width           =   4395
   End
   Begin VB.Frame Frame2 
      BackColor       =   &H00FFFFFF&
      Caption         =   "Profile"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   3255
      Left            =   120
      TabIndex        =   14
      Top             =   3720
      Width           =   9615
      Begin VB.CommandButton cmdRem 
         Caption         =   "-"
         Height          =   315
         Left            =   6540
         TabIndex        =   49
         Top             =   2760
         Width           =   375
      End
      Begin VB.ComboBox cboScroll 
         Appearance      =   0  'Flat
         Height          =   315
         Left            =   1380
         Style           =   2  'Dropdown List
         TabIndex        =   47
         Top             =   2760
         Width           =   4695
      End
      Begin VB.CommandButton cmdPlus 
         Caption         =   "+"
         Height          =   315
         Left            =   6120
         TabIndex        =   46
         Top             =   2760
         Width           =   375
      End
      Begin VB.TextBox tdetails 
         Appearance      =   0  'Flat
         Height          =   1425
         Left            =   4560
         MultiLine       =   -1  'True
         ScrollBars      =   3  'Both
         TabIndex        =   44
         Top             =   1200
         Width           =   4575
      End
      Begin VB.CommandButton cmdSave1 
         Caption         =   "Save"
         Height          =   315
         Left            =   8880
         TabIndex        =   43
         Top             =   2880
         Width           =   675
      End
      Begin VB.CommandButton cmdReset1 
         Caption         =   "Reset"
         Height          =   315
         Left            =   8100
         TabIndex        =   42
         Top             =   2880
         Width           =   675
      End
      Begin VB.TextBox ttwitter 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1380
         TabIndex        =   40
         Top             =   2100
         Width           =   2595
      End
      Begin VB.TextBox tlinkedin 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1380
         TabIndex        =   38
         Top             =   1800
         Width           =   2595
      End
      Begin VB.TextBox tfacebook 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1380
         TabIndex        =   36
         Top             =   1500
         Width           =   2595
      End
      Begin VB.TextBox twebsite 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1380
         TabIndex        =   34
         Top             =   1200
         Width           =   2595
      End
      Begin VB.TextBox tContacts 
         Appearance      =   0  'Flat
         Height          =   525
         Left            =   1380
         MultiLine       =   -1  'True
         ScrollBars      =   2  'Vertical
         TabIndex        =   32
         Top             =   600
         Width           =   7695
      End
      Begin VB.TextBox tkeywords 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1380
         TabIndex        =   30
         Top             =   300
         Width           =   7695
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "Scroll Images"
         Height          =   195
         Index           =   20
         Left            =   120
         TabIndex        =   48
         Top             =   2700
         Width           =   1095
      End
      Begin VB.Label Label1 
         AutoSize        =   -1  'True
         BackColor       =   &H00C0FFFF&
         Caption         =   "Details"
         Height          =   195
         Index           =   19
         Left            =   4020
         TabIndex        =   45
         Top             =   1260
         Width           =   480
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "twitter page"
         Height          =   195
         Index           =   18
         Left            =   120
         TabIndex        =   41
         Top             =   2100
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "LinkedIn page"
         Height          =   195
         Index           =   17
         Left            =   120
         TabIndex        =   39
         Top             =   1800
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "facebook page"
         Height          =   195
         Index           =   16
         Left            =   120
         TabIndex        =   37
         Top             =   1500
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "website url"
         Height          =   195
         Index           =   15
         Left            =   120
         TabIndex        =   35
         Top             =   1200
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "Contacts"
         Height          =   195
         Index           =   13
         Left            =   120
         TabIndex        =   33
         Top             =   600
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "Keywords(,)"
         Height          =   195
         Index           =   12
         Left            =   120
         TabIndex        =   31
         Top             =   300
         Width           =   1095
      End
   End
   Begin VB.Frame Frame1 
      BackColor       =   &H00FFFFFF&
      Caption         =   "Registration"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   2955
      Left            =   120
      TabIndex        =   13
      Top             =   660
      Width           =   9615
      Begin VB.CommandButton cmdSel 
         Caption         =   "..."
         Height          =   315
         Left            =   9000
         TabIndex        =   29
         Top             =   900
         Width           =   375
      End
      Begin VB.CommandButton cmdReset 
         Caption         =   "Reset"
         Height          =   315
         Left            =   8100
         TabIndex        =   28
         Top             =   2580
         Width           =   675
      End
      Begin VB.ComboBox cboCateg 
         Appearance      =   0  'Flat
         Height          =   315
         Left            =   1440
         Style           =   2  'Dropdown List
         TabIndex        =   6
         Top             =   2100
         Width           =   3015
      End
      Begin VB.CommandButton cmdSave 
         Caption         =   "Save"
         Height          =   315
         Left            =   8880
         TabIndex        =   12
         Top             =   2580
         Width           =   675
      End
      Begin VB.TextBox tIPAddress 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   5940
         TabIndex        =   11
         Top             =   1200
         Width           =   3015
      End
      Begin VB.TextBox tMainIcon 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   5940
         TabIndex        =   10
         Top             =   900
         Width           =   3015
      End
      Begin VB.TextBox tPassword 
         Appearance      =   0  'Flat
         Height          =   285
         IMEMode         =   3  'DISABLE
         Left            =   5940
         PasswordChar    =   "*"
         TabIndex        =   9
         Top             =   600
         Width           =   3015
      End
      Begin VB.TextBox tUserName 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   5940
         TabIndex        =   8
         Top             =   300
         Width           =   3015
      End
      Begin VB.TextBox temail 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1440
         TabIndex        =   7
         Top             =   2460
         Width           =   3015
      End
      Begin VB.TextBox tCreateDate 
         Appearance      =   0  'Flat
         Enabled         =   0   'False
         Height          =   285
         Left            =   1440
         TabIndex        =   5
         Top             =   1800
         Width           =   3015
      End
      Begin VB.TextBox tStartupDate 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1440
         TabIndex        =   4
         Top             =   1500
         Width           =   3015
      End
      Begin VB.TextBox tRepPhone 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1440
         TabIndex        =   3
         Top             =   1200
         Width           =   3015
      End
      Begin VB.TextBox tRepName 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1440
         TabIndex        =   2
         Top             =   900
         Width           =   3015
      End
      Begin VB.TextBox tDispName 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1440
         TabIndex        =   1
         Top             =   600
         Width           =   3015
      End
      Begin VB.TextBox tName 
         Appearance      =   0  'Flat
         Height          =   285
         Left            =   1440
         TabIndex        =   0
         Top             =   300
         Width           =   3015
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "IPAddress"
         Height          =   195
         Index           =   11
         Left            =   4680
         TabIndex        =   26
         Top             =   1200
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "mainIcon"
         Height          =   195
         Index           =   10
         Left            =   4680
         TabIndex        =   25
         Top             =   900
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "password"
         Height          =   195
         Index           =   9
         Left            =   4680
         TabIndex        =   24
         Top             =   600
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "userName"
         Height          =   195
         Index           =   8
         Left            =   4680
         TabIndex        =   23
         Top             =   300
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "email"
         Height          =   195
         Index           =   7
         Left            =   180
         TabIndex        =   22
         Top             =   2460
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "category"
         Height          =   195
         Index           =   6
         Left            =   180
         TabIndex        =   21
         Top             =   2100
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "createDate"
         Height          =   195
         Index           =   5
         Left            =   180
         TabIndex        =   20
         Top             =   1800
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "startupDate"
         Height          =   195
         Index           =   4
         Left            =   180
         TabIndex        =   19
         Top             =   1500
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "repPhone"
         Height          =   195
         Index           =   3
         Left            =   180
         TabIndex        =   18
         Top             =   1200
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "repName"
         Height          =   195
         Index           =   2
         Left            =   180
         TabIndex        =   17
         Top             =   900
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "dispName"
         Height          =   195
         Index           =   1
         Left            =   180
         TabIndex        =   16
         Top             =   600
         Width           =   1095
      End
      Begin VB.Label Label1 
         BackColor       =   &H00C0FFFF&
         Caption         =   "Name"
         Height          =   195
         Index           =   0
         Left            =   180
         TabIndex        =   15
         Top             =   300
         Width           =   1095
      End
   End
End
Attribute VB_Name = "frmLoadProfile"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim boolKeyPress As Boolean
Dim regID As Long
Dim myFolder As String, mainIconLoc$

Private Sub cmdPlus_Click()
On Error Resume Next
comm1.ShowOpen
cboScroll.AddItem comm1.filename
End Sub

Private Sub cmdRem_Click()
On Error Resume Next
Dim remName$
remName = cboScroll
If cboScroll.ListCount > 0 Then
    For i = 0 To cboScroll.ListCount - 1
        If cboScroll.List(i) = remName Then
            cboScroll.RemoveItem i
        End If
    Next
End If
cboScroll = ""
End Sub

Private Sub cmdReset_Click()
tName = ""
tDispName = ""
tRepName = ""
tRepPhone = ""
tStartupDate = ""
tCreateDate = ""
tUserName = ""
tPassword = ""
temail = ""
tIPAddress = ""
tMainIcon = ""
tName.Enabled = True
End Sub

Private Sub cmdReset1_Click()
tkeywords = ""
tContacts = ""
twebsite = ""
tfacebook = ""
tlinkedin = ""
ttwitter = ""
tdetails = ""
cboScroll.Clear
End Sub

Private Sub cmdResetAll_Click()
tRegUserId = ""
cmdReset_Click
cmdReset1_Click
End Sub

Private Sub cmdSave_Click()
On Error GoTo trap

If tName = "" Or tUserName = "" Or tPassword = "" Then
MsgBox "Name, UserName, Password cannot be empty"
Exit Sub
End If

If boolKeyPress = False Then
'flash a message to confirm before sending updated info
MsgBox "Please check the fields and press SAVE again to save the information"
boolKeyPress = True
Exit Sub
End If


strSQL = ""
tStartupDate = IIf(tStartupDate = "", Date, tStartupDate)
cboCateg = IIf(cboCateg = "Miscellaneous Vendors", "", cboCateg)
tStartupDate = Format(tStartupDate, "yyyy-mm-dd")
tCreateDate = Format(tCreateDate, "yyyy-mm-dd hh:mm:ss")
tDispName = tName
tDispName = StrConv(tDispName, vbProperCase)
tName = Replace(StrConv(tName, vbProperCase), " ", "")
mainIconLoc = "services/" & getDataFromIniVar(cboCateg) & "/" & tName
If boolKeyPress = True Then
    Set rs = cn.Execute("select id from registration where name='" & tName & "'")
    If rs.RecordCount = 0 Then
        'insert new register user
        strSQL = strSQL & "INSERT INTO REGISTRATION(name,displayName,repName,repPhone,startUpDate,createdDate,category,userName,password,email,ipAddress,status,mainIcon,counter) VALUES("
        strSQL = strSQL & "'" & tName & "'"
        strSQL = strSQL & ",'" & tDispName & "'"
        strSQL = strSQL & ",'" & tRepName & "'"
        strSQL = strSQL & ",'" & tRepPhone & "'"
        strSQL = strSQL & ",'" & tStartupDate & "'"
        strSQL = strSQL & ",'" & tCreateDate & "'"
        strSQL = strSQL & ",'" & getDataFromIniVar(cboCateg) & "'"
        strSQL = strSQL & ",'" & tUserName & "'"
        strSQL = strSQL & ",'" & tPassword & "'"
        strSQL = strSQL & ",'" & temail & "'"
        strSQL = strSQL & ",'" & tIPAddress & "'"
        strSQL = strSQL & ",'active'"
        strSQL = strSQL & ",'" & mainIconLoc & "'"
        strSQL = strSQL & ",0"
        strSQL = strSQL & ")"
        cn.Execute strSQL
    Else
        'update the register user details
        regID = Val(rs(0) & "")
        strSQL = strSQL & "Update Registration set "
        strSQL = strSQL & "name='" & tName & "'"
        strSQL = strSQL & ",displayName='" & tDispName & "'"
        strSQL = strSQL & ",repName='" & tRepName & "'"
        strSQL = strSQL & ",repPhone='" & tRepPhone & "'"
        strSQL = strSQL & ",startupDate='" & tStartupDate & "'"
        strSQL = strSQL & ",category='" & getDataFromIniVar(cboCateg) & "'"
        strSQL = strSQL & ",username='" & tUserName & "'"
        strSQL = strSQL & ",password='" & tPassword & "'"
        strSQL = strSQL & ",email='" & temail & "'"
        strSQL = strSQL & ",ipaddress='" & tIPAddress & "'"
        strSQL = strSQL & ",mainIcon='" & mainIconLoc & "'"
        strSQL = strSQL & " where id=" & tRegUserId & ""
        cn.Execute strSQL
    End If
    tRegUserId = cn.Execute("select id from registration where name='" & tName & "'")(0)
    MsgBox "Registration Completed. You can create profile now."
    'Call cmdReset_Click
    'save further info to the hard disk
    myFolder = folderAlias & "\" & getDataFromIniVar(cboCateg) & "\" & tName
    If Dir(myFolder, vbDirectory) = vbNullString Then
        MkDir myFolder
    End If
    FileCopy tMainIcon, myFolder & "\mainIcon.png"
        
    tCreateDate = Now
    boolKeyPress = False
    strSQL = ""
    tName.SetFocus
End If
Exit Sub
trap:
MsgBox Err.Description
End Sub

Private Sub cmdSave1_Click()
On Error GoTo trap
Dim sliderImages$

If tRegUserId = "" Then
    MsgBox "Registration Id cannot be blank"
    Exit Sub
End If

If boolKeyPress = False Then
'flash a message to confirm before sending updated info
MsgBox "Please check the fields and press SAVE again to save the information"
boolKeyPress = True
Exit Sub
End If

strSQL = ""
'myFolder = folderAlias & "\" & getDataFromIniVar(cboCateg) & "\" & tName
myFolder = "services/" & getDataFromIniVar(cboCateg) & "/" & tName
If boolKeyPress = True Then
    Set rs = cn.Execute("select id from profile where companyId='" & tRegUserId & "'")
    If rs.RecordCount = 0 Then
        'insert new register user
        strSQL = strSQL & "INSERT INTO PROFILE(companyId,sliderImages,displayData,contactInfo,keywords,website,facebookPage,linkedInPage,twitterPage,updateDate) VALUES("
        strSQL = strSQL & "'" & tRegUserId & "'"
        strSQL = strSQL & ",'" & myFolder & "'"
        strSQL = strSQL & ",'" & tdetails & "'"
        strSQL = strSQL & ",'" & tContacts & "'"
        strSQL = strSQL & ",'" & tkeywords & "'"
        strSQL = strSQL & ",'" & twebsite & "'"
        strSQL = strSQL & ",'" & tfacebook & "'"
        strSQL = strSQL & ",'" & tlinkedin & "'"
        strSQL = strSQL & ",'" & ttwitter & "'"
        strSQL = strSQL & ",'" & Format(Now, "yyyy-mm-dd hh:mm:ss") & "'"
        strSQL = strSQL & ")"
        cn.Execute strSQL
    Else
        'update the register user details
        regID = Val(rs(0) & "")
        strSQL = strSQL & "Update profile set "
        strSQL = strSQL & ",sliderImages='" & myFolder & "'"
        strSQL = strSQL & ",displayData='" & tdetails & "'"
        strSQL = strSQL & ",contactInfo='" & tContacts & "'"
        strSQL = strSQL & ",keywords='" & tkeywords & "'"
        strSQL = strSQL & ",website='" & twebsite & "'"
        strSQL = strSQL & ",facebookpage='" & tfacebook & "'"
        strSQL = strSQL & ",linkedinPage='" & tlinkedin & "'"
        strSQL = strSQL & ",twitterPage='" & ttwitter & "'"
        strSQL = strSQL & ",updateDate='" & Format(Now, "yyyy-mm-dd hh:mm:ss") & "'"
        strSQL = strSQL & " where id=" & regID & ""
        cn.Execute strSQL
    End If
    MsgBox "Profile and Registation Completed. Congrats!!!!"
    
    'save further info to the hard disk
    myFolder = folderAlias & "\" & getDataFromIniVar(cboCateg) & "\" & tName
    For i = 0 To cboScroll.ListCount - 1
        FileCopy cboScroll.List(i), myFolder & "\" & getFolderName(cboScroll.List(i))
    Next
    
    cmdReset_Click
    cmdReset1_Click
    tCreateDate = Now
    boolKeyPress = False
    strSQL = ""
End If
Exit Sub
trap:
MsgBox Err.Description
End Sub

Private Sub cmdSel_Click()
On Error Resume Next
comm1.ShowOpen
tMainIcon = comm1.filename
End Sub

Private Sub Form_Load()
On Error GoTo trap
    readConfigIni
    openConn
    If cn.State = adStateClosed Then Exit Sub
    Set rs = cn.Execute("select concat(categName,'[',folderalias,']') from category")
    bindControl rs, cboCateg
    
    tCreateDate = Now
Exit Sub
trap:
MsgBox Err.Description
End Sub




Private Sub lstReg_KeyDown(KeyCode As Integer, Shift As Integer)
If KeyCode = 13 Then
Dim sID$
If lstReg.ListCount > 0 Then
    sID = lstReg.Text
    sID = Mid(sID, 1, InStr(1, sID, " "))
    tRegUserId = sID
    tRegUserId_KeyDown 13, 0
    lstReg.Visible = False
End If

End If
End Sub

Private Sub tRegUserId_KeyDown(KeyCode As Integer, Shift As Integer)
If KeyCode = vbKeyDown And lstReg.Visible = True Then
    lstReg.Selected(0) = True
    lstReg.SetFocus
End If
If KeyCode = vbKeyF2 Then
    Call SearchRegisters
End If
If KeyCode = 13 And tRegUserId <> "" And IsNumeric(tRegUserId) = True Then
Call cmdReset_Click
Call cmdReset1_Click
    Set rs = cn.Execute("select * from registration where id=" & tRegUserId & "")
    If rs.RecordCount <> 0 Then
        tName = rs("name") & ""
        tDispName = rs("displayName") & ""
        tRepName = rs("repName") & ""
        tRepPhone = rs("repPhone") & ""
        tStartupDate = rs("startupDate") & ""
        tCreateDate = rs("createdDate") & ""
        cboCateg = rs("category") & ""
        temail = rs("email") & ""
        tUserName = rs("username") & ""
        tPassword = rs("password") & ""
        tMainIcon = rs("mainIcon") & ""
        tIPAddress = rs("ipAddress") & ""
        tName.Enabled = False
        
        Set rs = cn.Execute("select * from profile where companyid=" & tRegUserId & "")
        If rs.RecordCount <> 0 Then
            tkeywords = rs("keywords") & ""
            tContacts = rs("contactInfo") & ""
            tdetails = rs("displayData") & ""
            twebsite = rs("website") & ""
            tfacebook = rs("facebookPage") & ""
            tlinkedin = rs("linkedinPage") & ""
            ttwitter = rs("twitterPage") & ""
            Dim sliderImages$, sIm() As String
            sliderImages = rs("sliderImages") & ""
            If sliderImages <> "" Then
                sIm = Split(sliderImages, ",")
                For i = 0 To UBound(sIm) - 1
                    cboScroll.AddItem sIm(i)
                Next
            End If
        End If
    Else
        tName.Enabled = True
        MsgBox "no registaration id found"
        cmdReset_Click
        cmdReset1_Click
    End If
End If
End Sub

Private Sub SearchRegisters()
lstReg.Clear
If tRegUserId <> "" Then
    Set rs = cn.Execute("select id,displayName from registration where displayname like '%" & tRegUserId & "%' limit 10")
    If rs.RecordCount > 0 Then
        For i = 0 To rs.RecordCount - 1
            lstReg.AddItem rs(0) & " " & rs(1) & ""
            rs.MoveNext
        Next
        lstReg.Visible = True
    End If
End If
End Sub
