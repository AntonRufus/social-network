import React from 'react';
import friendsCSS from './Kabal.module.css'
import {NavLink} from "react-router-dom";
import usersCSS from "../Users.module.css";

const Info = () => {
    return <div>
        <p>
            As a chosen warrior, his identity is a mystery to all. It is believed he is a survivor of a attack
            by Shao Kahn's extermination squads. As a result, he is viciously scarred, kept alive by artificial
            respirators and a rage for ending Shao Kahn's conquest.
        </p>
        <h2>Special Moves</h2>
        <p>
            <strong>Fireball:</strong> <em>Back, Back, High Punch.</em>
            <strong>Web Spin:</strong> <em>Back, Forward, Low Kick.</em>
            <strong>Ground Saw:</strong> <em>Back, Back, Back, Run.</em>
        </p>
        <h2>Basic Combos</h2>
        <p>
            <strong>Combo 1:</strong> <em>Low Kick, Low Kick, Back + High Kick.</em>
            <strong>Combo 2:</strong> <em>Low Kick, Low Kick, High Kick, Back + High Kick.</em>
            <strong>Combo 3:</strong> <em>Low Kick, Low Kick, High Punch, High Punch, Down + High
            Punch.</em>
            <strong>Combo 4:</strong> <em>Low Kick, Low Kick, High Punch, High Punch, Down + Low Punch, Down +
            High Punch.</em>
        </p>
        <h2>Finishing Moves</h2>
        <p>
            <strong>Fatality 1:</strong> <em>(Half Screen Away) Down, Down, Back, Forward, Block.</em>
            <strong>Fatality 2:</strong> <em>(Close) Run, Block, Block, Block, High Kick.</em>
            <strong>Animality:</strong> <em>(Close) (Hold High Punch) Forward, Forward, Down, Forward, (Release
            High Punch).</em>
            <strong>Babality:</strong> <em>Run, Run, Low Kick.</em>
            <strong>Friendship:</strong> <em>Run, Low Kick, Run, Run, Up.</em>
            <strong>Stage Fatalities:</strong> <em>Block, Block, High Kick.</em>
            <strong>*Brutality:</strong> <em>High Punch, Block, Low Kick, Low Kick, Low Kick, High Kick, Low
            Punch, Low Punch, Low Punch, High Punch, Low Punch.</em>
        </p>

        <h2>Ending</h2>
        <p>
            After returning from near death, Kabal swears revenge against his attackers. He fights alongside the
            other Earth warriors. When he defeats Motaro and the mighty Shao Kahn, he proves he is truly the chosen
            one.
        </p>
        <p>
            Before the invasion, Kabal had led a life of crime. He was once a member of the Back Dragon along
            with Kano. Now Kabal devotes his life to fighting injustice. He gives crime's inner circle something to
            fear.
        </p>
    </div>
}

const Kabal = (props) => {
    return (
        <div>
            <NavLink to='/users' className={usersCSS.fullName}>
                Go back.
            </NavLink>
            <div className={friendsCSS.friends}>
                <img src="https://legacy.mortalkombatonline.com/content/games/mk3/kabal/bio.gif" alt=""/>
                <h3>Scorpion</h3>
            </div>
            <Info/>
        </div>
    )
}

export default Kabal;
