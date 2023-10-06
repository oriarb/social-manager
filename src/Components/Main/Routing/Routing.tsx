import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import HomeScreen from '../../HomeScreen/HomeScreen';
import StartingScreen from '../../StartingScreen/StartingScreen';
import UserScreen from '../../UserScreen/UserScreen';

export default function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Navigate to="/gettingStarted" />}/>
            <Route path="/gettingStarted" element={<StartingScreen />}/>
            <Route path="/home" element={<HomeScreen />}/>
            <Route path="/auth/instagramUser" element={<UserScreen />}/>
        </Routes>
    </div>
  )
}
