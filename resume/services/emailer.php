<?php

class config
{
    function getConfig($id)
    {
        $cont = "";
        $xmlFileName = "config_gmail.xml";
        $host="http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
        if (strpos($host,'localhost')<=0) {
            $xmlFileName = "config.xml";
        }
        $xml = simplexml_load_file($xmlFileName);
        foreach ($xml as $tag) {
            if ($id == "")
                $cont .= $tag->getName() . "->" . $tag . "<br/>";

            if ($tag->getName() == $id)
                $cont = $tag;
        }
        echo "$cont";
        return $cont;
    }

    function makeLink($string)
    {
        // make sure there is an http:// on all URLs
        $string = preg_replace("/([^\w\/])(www\.[a-z0-9\-]+\.[a-z0-9\-]+)/i", "$1http://$2", $string);
        //make all URLs links
        $string = preg_replace("/([\w]+:\/\/[\w-?&;#~=\.\/\@]+[\w\/])/i", "<a target=\"_blank\" href=\"$1\">$1</A>", $string);
        // make all emails hot links
        $string = preg_replace("/([\w-?&;#~=\.\/]+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?))/i", "<A HREF=\"mailto:$1\">$1</A>", $string);
        return $string;
    }
}


Class Mailer
{
    public $emailData = "";
    public $contact_name = "";
    public $toEmail = "";
    public $replyEmail = "";
    public $contact_subject = "";

    function getIP()
    {
        return $_SERVER['REMOTE_ADDR'];
    }

    function getHost()
    {
        return $_SERVER[HTTP_HOST] + "/" + $_SERVER[REQUEST_URI];
    }

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    function sendMail()
    {
        require_once "class.phpmailer.php";
        //enable openSSL.dll in php ini and extension dir must be set to the ext folder
        $mail = new PHPMailer();
        $cfg = new config();
        $mail->isSMTP(true);
        $mail->SMTPDebug = (int)$cfg->getConfig("SMTPDebug");
        $mail->Mailer = $cfg->getConfig("Mailer");
        $mail->CharSet = 'UTF-8';
        $mail->Host = $cfg->getConfig("Host");
        $mail->Port = (int)$cfg->getConfig("Port");
        $mail->SMTPAuth = true;// settype($cfg->getConfig("SMTPAuth"),'bool');
        $mail->Username = $cfg->getConfig("Username");
        $mail->Password = $cfg->getConfig("Password");
        $mail->SMTPSecure = $cfg->getConfig("SMTPSecure");
        $mail->PluginDir = $cfg->getConfig("Plugdir");
        if (!$mail->SmtpConnect()) {
            return 'Could not connect to mail server';
            exit;
        } else {
            $from = $cfg->getConfig("FromAddress");
            $to_addr = $cfg->getConfig("ToAddress");
            $subject = $cfg->getConfig("Subject");
            $mail->From = $from;
            $mail->FromName = $from;
            $mail->addAddress($to_addr, $to_addr);  // Add a recipient
            $mail->addReplyTo($to_addr, $to_addr);
            $mail->WordWrap = (int)$cfg->getConfig("Wordwrap");
            //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
            $mail->isHTML(true);
            $mail->Subject = $subject;// $cfg->getConfig("Subject");
//            $mail->Body ="<div style='font-weight: bolder; background-color:#20c997;'>Client IP: ".$this->getIP()."</div>".$this->emailData;
            $mail->Body = $this->emailData;
            $msg = "";
            if (!$mail->send()) {
                $msg .= "<span class='error' style='font-size:8pt;'>Error: " . $mail->ErrorInfo;
                return $msg;
                exit;
            }
        }
        $mail = null;
        $cfg = null;
        return "Message has been sent";
    }
}

?>