import React, { Component } from 'react'

//stateless component
export default function Header(){
    return(
            <header className="container">
                <nav>
                    <ul className="main__navigation">
                        <li className="logo">
                            <img 
                                src="../../assets/logo.png" 
                                alt="logo"
                            />
                        </li>
                        <li className="">
                            Gnomes
                        </li>
                        <li className="">
                            Trolls
                        </li>
                        <li className="create__button">
                            Create Monster
                        </li>
                        <li className="user__pic">
                            <img src="" alt=""/>
                        </li>
                        <li className="user__info">
                            <strong className="user__info-name">Robert Labus</strong>
                            <br />
                            game master
                        </li>
                    </ul>
                </nav>
            </header>
    )
}