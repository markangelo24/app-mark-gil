let process = {
	menu:function(){
		let content = <ul><center>
		<a href='#' onClick={process.page1}><button>Click Me!!!!</button></a>
		
		</center></ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page12}><button>prev</button></a>JANUARY<a href='#' onClick={process.page2}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>
		<ul width="100%" class="days">
			<li><font color="red">1</font></li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li><font color="red">8</font></li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li>12</li>
			<li>13</li>
			<li>14</li>
			<li><font color="red">15</font></li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li>19</li>
			<li>20</li>
			<li>21</li>
			<li><font color="red">22</font></li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li>26</li>
			<li>27</li>
			<li>28</li>
			<li><font color="red">29</font></li>
			<li>30</li>
			<li>31</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page1}><button>prev</button></a>FEBRUARY<a href='#' onClick={process.page3}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page2}><button>prev</button></a>MARCH<a href='#' onClick={process.page4}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page3}><button>prev</button></a>APRIL<a href='#' onClick={process.page5}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
	let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page4}><button>prev</button></a>MAY<a href='#' onClick={process.page6}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
	let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page5}><button>prev</button></a>JUNE<a href='#' onClick={process.page7}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
	let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page6}><button>prev</button></a>JULY<a href='#' onClick={process.page8}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page8:function(){
	let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page7}><button>prev</button></a>AUGUST<a href='#' onClick={process.page9}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ul>

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page9:function(){
	let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page8}><button>prev</button></a>SEPTEMBER<a href='#' onClick={process.page10}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page10:function(){
	let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page9}><button>prev</button></a>OCTOBER<a href='#' onClick={process.page11}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page11:function(){
	let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page10}><button>prev</button></a>NOVEMBER<a href='#' onClick={process.page12}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page12:function(){
	let content = <div>
				<li><center><h1>
			<a href='#' onClick={process.page11}><button>prev</button></a>DECEMBER<a href='#' onClick={process.page1}><button>next</button></a><br/>
				
			</h1></center></li>
			<ul class="weekdays">
			<li><font color="red">SUN</font></li>
			<li>MON</li>
			<li>TUE</li>
			<li>WED</li>
			<li>THU</li>
			<li>FRI</li>
			<li>SAT</li>
		</ul>

			<ul width="100%" class="days">
			<li></li>
			<li></li>
			<li></li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li><font color="red">5</font></li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li><font color="red">12</font></li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li><font color="red">19</font></li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li>25</li>
			<li><font color="red">26</font></li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>
			<li>31</li>
		</ul>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><center>
					Mark Gil Lavarias .....
				</center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},500);