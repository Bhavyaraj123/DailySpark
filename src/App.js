// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route,Routes, } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News'

import React, { Component } from 'react'
export default class App extends Component {
  pageSize= 15;
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route> 
        <Route path='/business' element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route> 
        <Route path='/entertainment' element={<News  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route> 
        <Route path='/general' element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route> 
        <Route path='/health' element={<News  key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route> 
        <Route path='/science' element={<News key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route> 
        <Route path='/sports' element={<News  key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route> 
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
