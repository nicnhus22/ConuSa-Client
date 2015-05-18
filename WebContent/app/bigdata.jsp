<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Concordia | GooglePlay</title>
		
		<!-- Open Sans 
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800' rel='stylesheet' type='text/css'>
		-->
		
		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
	
		<nav class="navbar navbar-inverse navbar-fixed-top">
	      <div class="container">
	        <div class="navbar-header">
	          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span class="sr-only">Toggle navigation</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	          </button>
	          <a class="navbar-brand" href="index.jsp">ConuSa</a>
	        </div>
	        <div id="navbar" class="collapse navbar-collapse">
	          <ul class="nav navbar-nav">
	            <li><a href="index.jsp">Home</a></li>
	            <li class="active"><a href="bigdata.html">BigData</a></li>
	            <li><a href="analysis.jsp">Analysis</a></li>
	          </ul>
	        </div><!--/.nav-collapse -->
	      </div>
	    </nav>
		
			    
	    <div class="container">
	    	<div class="inner_container">
	    	</div>
	    </div>
		
	    <div class="container">
	    	<div class="">
	    		<div role="tabpanel">
				  <!-- Nav tabs -->
				  <ul class="nav nav-tabs" role="tablist">
				  	<li role="presentation" class="active" id="tab_star_all">
				    	<a href="#star_all" aria-controls="star_all" role="tab" data-toggle="tab">
							All
				    	</a>
				    </li>
				    <li role="presentation" id="tab_star_5">
				    	<a href="#star_5" aria-controls="star_5" role="tab" data-toggle="tab">
				    		<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				    	</a>
				    </li>
				    <li role="presentation" id="tab_star_4">
					    <a href="#star_4" aria-controls="star_4" role="tab" data-toggle="tab">
					    	<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
						</a>
					</li>
				    <li role="presentation" id="tab_star_3">
				    	<a href="#star_3" aria-controls="star_3" role="tab" data-toggle="tab">
				    		<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				    	</a>
				    </li>
				    <li role="presentation" id="tab_star_2">
				    	<a href="#star_2" aria-controls="star_2" role="tab" data-toggle="tab">
				    		<i class="fa fa-star"></i><i class="fa fa-star"></i>
				    	</a>
				    </li>
				    <li role="presentation" id="tab_star_1">
				    	<a href="#star_1" aria-controls="star_1" role="tab" data-toggle="tab">
				    		<i class="fa fa-star"></i>
				    	</a>
				    </li>
				  </ul>
				  
				  <!--  <span class="badge">42</span>  -->
				  <!-- Tab panes -->
				  <div class="tab-content">
				  	<div role="tabpanel" class="tab-pane active" id="star_all">
				    	
				    </div>
				    <div role="tabpanel" class="tab-pane" id="star_5">
				    	
				    </div>
				    <div role="tabpanel" class="tab-pane" id="star_4">
				    
				    </div>
				    <div role="tabpanel" class="tab-pane" id="star_3">
				    
				    </div>
				    <div role="tabpanel" class="tab-pane" id="star_2">
				    
				    </div>
				    <div role="tabpanel" class="tab-pane" id="star_1">
				    
				    </div>
				  </div>
				</div>
			</div>
	    </div><!-- /.container -->
		
		
		<script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/horizontalChart.js" type="text/javascript"></script>
        <script src="js/highlight.js" type="text/javascript"></script>
        <script src="js/table-search.js" type="text/javascript"></script>
        <script src="js/bigdata.js" type="text/javascript"></script>
        <script src="js/clickEventsBigData.js" type="text/javascript"></script>
        
	</body>
</html>