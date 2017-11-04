import React, { Component } from 'react'

//stateless component
export default function Header(){
    return(
            <header className="container">
                    <ul className="main__navigation">
                        <li className="main__navigation-item logo">
                            <img 
                                src="../../assets/logo.png" 
                                alt="logo"
                            />
                        </li>
                        <li className="main__navigation-item monster_nav">
                            Gnomes
                        </li>
                        <li className="main__navigation-item monster_nav">
                            Trolls
                        </li>
                        <li className="main__navigation-item create__button">
                            Create Monster
                        </li>
                        <li className="main__navigation-item user__pic">
                            <img src="../../assets/avatar.png" alt="user_pic"/>
                        </li>
                        <li className="main__navigation-item user__info">
                            <p className="user__info-name">
                                Robert Labus
                            </p>
                            <p>
                                Game Master
                            </p>
                        </li>
                    </ul>
            </header>
    )
}