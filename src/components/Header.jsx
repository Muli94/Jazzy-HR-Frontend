import React, { Component } from 'react'

//stateless component
export default function Header(){
    return(
            <header className="">
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
                        <li className="main__navigation-item user__info">
                            <img src="../../assets/avatar.png" alt="user_pic"/>
                            <strong className="user__info-name">
                                Robert Labus
                            </strong>
                            <p>
                                game master
                            </p>
                        </li>
                    </ul>
            </header>
    )
}