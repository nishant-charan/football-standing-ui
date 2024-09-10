import React, {useEffect, useState} from "react";
import FootballStandingService from "../service/FootballStandingService";

const FootballStanding = () => {

    const [countries, setCountries] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const [teams, setTeams] = useState([]);
    const [standings, setStandings] = useState([]);
    const [overallPosition, setOverallPosition] = useState(0);

    const [countryId, setCountryId] = useState('-1');
    const [leagueId, setLeagueId] = useState('-1');
    const [teamId, setTeamId] = useState('-1');

    useEffect(() => {
        FootballStandingService.getCountries()
            .then(data => {
                const filteredCountries = data.map(country => ({
                    id: country.country_id,
                    name: country.country_name,
                }));
                setCountries(filteredCountries);
            })
            .catch(error => {
                console.error(`Error fetching countries :`, error);
            });
    }, []);

    const handleCountryChange = (event) => {
        const selectedCountryId = event.target.value;
        setCountryId(selectedCountryId);
        setLeagues([]);
        setTeams([]);
        setStandings([]);
        setOverallPosition(0);
        setLeagueId('-1');
        setTeamId('-1');
        if (selectedCountryId !== '-1') {
            FootballStandingService.getLeagues(selectedCountryId)
                .then(data => {
                    const filteredLeagues = data.map(league => ({
                        id: league.league_id,
                        name: league.league_name
                    }));
                    setLeagues(filteredLeagues);
                })
                .catch(error => {
                    console.error(`Error fetching league for ${selectedCountryId} :`, error);
                });
        }
    };

    const handleLeagueChange = (event) => {
        const selectedLeagueId = event.target.value;
        setLeagueId(selectedLeagueId);

        if (selectedLeagueId === '-1') {
            setTeams([]);
            setStandings([]);
            setOverallPosition(0);
            setTeamId('-1');
        } else {
            FootballStandingService.getTeams(selectedLeagueId)
                .then(data => {
                    const filteredTeams = data.map(team => ({
                        id: team.team_key,
                        name: team.team_name
                    }));
                    setTeams(filteredTeams);
                })
                .catch(error => {
                    console.error(`Error fetching teams for ${selectedLeagueId} :`, error);
                });

            FootballStandingService.getStandings(selectedLeagueId)
                .then(data => {
                    const filteredStandings = data.map(standing => ({
                        teamId: standing.team_id,
                        teamName: standing.team_name,
                        overallPosition: standing.overall_league_position
                    }));
                    setStandings(filteredStandings);
                })
                .catch(error => {
                    console.error(`Error fetching standing for ${selectedLeagueId} :`, error);
                });
        }
    }

    const handleTeamChange = (event) => {
        const selectedTeamId = event.target.value;
        setTeamId(selectedTeamId);
        if (selectedTeamId === '-1') {
            setOverallPosition(0);
        } else {
            let selectedTeamStanding = '';
            standings.filter((standing) => {
                if(standing.teamId === selectedTeamId) {
                    selectedTeamStanding = standing;
                }
            });
            if (selectedTeamStanding !== '') {
                setOverallPosition(selectedTeamStanding.overallPosition);
            }
        }
    }

    return(
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center text-black fw-bold">Football Standing</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-3">
                        <div className="p-2">
                            <label className="form-label">Countries : </label>
                            <select id="country-select" className="form-control" value={countryId} onChange={handleCountryChange}>
                                <option value="-1">Select</option>
                                {countries.map(
                                    country => <option key={country.id} value={country.id}>{country.name}</option>
                                )}
                            </select>
                        </div>
                        <div className="p-2">
                            <label className="form-label">Leagues : </label>
                            <select id="league-select" className="form-control" value={leagueId} onChange={handleLeagueChange}>
                                <option value="-1">Select</option>
                                {leagues.map(
                                    league => <option key={league.id} value={league.id}>{league.name}</option>
                                )}
                            </select>
                        </div>
                        <div className="p-2">
                            <label className="form-label">Teams : </label>
                            <select id="team-select" className="form-control" value={teamId} onChange={handleTeamChange}>
                                <option value="-1">Select</option>
                                {teams.map(
                                    team => <option key={team.id} value={team.id}>{team.name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-3">
                        <h2 className="text-center p-1">Overall League Position</h2>
                        <div className="text-center">
                            <h3>{overallPosition}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FootballStanding;