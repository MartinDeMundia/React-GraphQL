///import logo from './../logo.svg';
import './../styles/App.css';
import React, {Component} from 'react'
import Visits from './../components/Visits';
import KeyIssues from './../components/KeyIssues';
import MonitoringPeriod from './../components/MonitoringPeriod';
import VisualsGraphs from './../components/VisualsGraphs'; 

class App extends Component {
  render() {
    return (
      <div className="App">   
       
       <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mr-auto"><a href="/" class="navbar-brand" >                       
                        <h2 class="brand-text mb-0">ACCESS AFYA</h2>
                    </a></li>
                <li class="nav-item nav-toggle"><a href="/" class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class=" nav-item"><a href="/home"><i class="feather icon-home"></i><span class="menu-title" data-i18n="Dashboard">Dashboard</span><span class="badge badge badge-warning badge-pill float-right mr-2"></span></a>
                    <ul class="menu-content">                        
                        <li class="active"><a href="/home"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="eCommerce">Access Afya Menu</span></a>
                        </li>
                    </ul>
                </li>
          
            </ul>
        </div>
    </div>  
  
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">           
                <section id="dashboard-ecommerce">
                <div class="row">
                  <Visits/>  
                  <div class="col-9">
                               <div class="row"><div class="col-12"> <h2 class="text-bold-700 mt-1">Key Issues</h2></div></div>
                                <KeyIssues/> 


                                <div class="row"><div class="col-12"> <h2 class="text-bold-700 mt-1">Monitoring Period</h2></div></div>
                                <MonitoringPeriod/>
                               
                               
                                <div class="row"><div class="col-12"> <h2 class="text-bold-700 mt-1">Visuals - Graphs</h2></div></div>                               
                                <VisualsGraphs/>

                    </div>
                  </div>
                </section>    
            </div>
        </div>
    </div>
   
















      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>
    )
  }
}

export default App;
