import React from "react";

function FootballTeams(Props){

    const teams = Props.footBallTeams;

    return( <>
        <h2>Teams count using Logical operator && </h2>
         { teams.length > 0 &&
            <h3>We have {teams.length} teams in our Tournament !</h3>
         }
    </>);
}

export default FootballTeams;
