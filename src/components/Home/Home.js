import React from 'react'
import Header from '../Header/Header'
import Hotels_List from '../Hotels_List/Hotels_List'
import Search from '../Search/Search'

function Home() {
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Header/>
            <Search/>
            <Hotels_List/>
        </div>
    )
}

export default Home
