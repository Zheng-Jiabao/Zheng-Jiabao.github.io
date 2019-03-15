<%@LANGUAGE="JAVASCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>无标题文档</title>
<script src="Java/jquery-3.3.1.js"></script>
<script src="Java/main.js"></script>
</head>

<body>
<%var URLforScr=window.location.search;URLforScr=URLforScr.slice(4);%>
<div class="DivUp" id="Start"><a href="javascript:window.history.go(-1);"><img src="Ico/back-black.png" alt="back" width="14" height="14" /> <span class="StyStr">返回</span></a> <a href="../index.html"><img src="Ico/home-black.png" alt="home" width="14" height="14" border="0" /> <span class="StyStr">主页</span></a><%if(URLforScr=="1"){%></div>
</body>
</html>
