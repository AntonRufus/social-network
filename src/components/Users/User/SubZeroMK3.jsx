import React from 'react';
import friendsCSS from './Kabal.module.css'
import {NavLink} from "react-router-dom";
import usersCSS from "../Users.module.css";

const Info = () => {
    return <div>
        <p>
            The ninja returns- unmasked. Betrayed by his own clan, the Lin Kuei, he broke sacred codes of honor by
            leaving his clan and is marked for death. But unlike the ninja of old, his pursuers comes as machines. He
            must not only defend himself against the Outworld menace, but he must also elude his soulless assassins.
        </p>
        <h2>Special Moves</h2>
        <p>
            <strong>Freeze:</strong> <em>Down, Forward, Low Punch.</em>
            <strong>Ice Shower:</strong> <em>Down, Forward, High Punch.</em>
            <strong>Front Ice Shower:</strong> <em>Down, Forward, Back, High Punch.</em>
            <strong>Behind Ice Shower</strong>: <em>Down, Back, Forward, High Punch.</em>
            <strong>Ice Clone:</strong> <em>Down, Back, Low Punch.</em>
            <strong>Ground Slide:</strong> <em>Back + Low Punch + Low Kick + Block.</em>
        </p>
        <h2>Basic Combos</h2>
        <p>
            <strong>Combo 1:</strong> <em>High Kick, High Kick, Back + High Kick.</em>
            <strong>Combo 2:</strong> <em>High Punch, High Punch, Low Punch, Low Kick, High Kick, Back + High Kick.</em>
        </p>
        <h2>Finishing Moves</h2>
        <p>
            <strong>Fatality 1:</strong> <em>(Close) Block, Block, Run, Block, Run.</em>
            <strong>Fatality 2:</strong> <em>(Outside Sweep) Back, Back, Down, Back, Run.</em>
            <strong>Animality:</strong> <em>Forward, Up, Up.</em>
            <strong>Babality:</strong> <em>Down, Back, Back, High Kick.</em>
            <strong>Friendship:</strong> <em>Low Kick, Run, Run, Up.</em>
            <strong>Stage Fatalities:</strong> <em>Back, Down, Forward, Forward, High Kick.</em>
            <strong>*Brutality:</strong> <em>High Punch, Low Kick, High Kick, Low Punch, High Punch, High Kick, High
            Kick, High Punch, High Punch, Low Punch.</em>
        </p>

        <h2>Ending</h2>
        <p>
            In vicious battle, Sub-Zero faces Cyrax and Sektor: but not alone. He finds his third Lin Kuei Assassin -
            the elusive Smoke. Before automation Smoke and Sub-Zero were allies. Sub-Zero helps Smoke recall his past
            and gains him as an ally once again.
        </p>
        <p>
            Sub-Zero defeats his cyborg assassins with the help of Smoke and finds it takes all his own inner strengths
            to defeat Kahn and his Outworld Minions. The former ninja once again disappears into the shadows. His legacy
            known only by a select few.
        </p>
    </div>
}

const SubZeroMK3 = (props) => {
    return (
        <div>
            <NavLink to='/users' className={usersCSS.fullName}>
                Go back.
            </NavLink>
            <div className={friendsCSS.friends}>
                <img src="https://legacy.mortalkombatonline.com/content/games/mk3/subzero/bio.gif" alt=""/>
                <h3>Sub-Zero</h3>
            </div>
            <Info/>
        </div>
    )
}

export default SubZeroMK3;
