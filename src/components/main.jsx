import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChooseGallery, Gallery, PieceDetail } from './gallery.jsx';

import Home from './home.jsx';
import Resume from './resume.jsx';
import WorkTermReport from './wtr_blog.jsx';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path = '/' element={<Home/>}></Route>
      <Route exact path='/resume' element={<Resume/>}></Route>
      <Route exact path='/wtr_blog'>
        <Route path=":id">
          <Route path=":pg" element={<WorkTermReport/>}></Route>
        </Route>
      </Route>
      <Route exact path='/galleries' element={<ChooseGallery/>}></Route>
      <Route exact path='/view_gallery'>
        <Route path=":yr" element={<Gallery/>}>
        </Route>
      </Route>
      <Route exact path='/view_piece'>
        <Route path=":yr">
          <Route path=":piece_id" element={<PieceDetail/>}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default Main;