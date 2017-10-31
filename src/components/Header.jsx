import React, { Component } from 'react'

//stateless component
export default function Header(){
    return(
            <header className="container">
                <nav>
                    <ul>
                        <li>
                            <img src="../../assets/logo.png" alt="logo"/>
                        </li>
                        <li>
                            Gnomes
                        </li>
                        <li>
                            Trolls
                        </li>
                        <li>
                            Create Monster
                        </li>
                        <li>
                            <img src="" alt=""/>
                        </li>
                        <li>
                            <strong>Robert Labus</strong>
                            <br />
                            game master
                        </li>
                    </ul>
                </nav>
            </header>
    )
}