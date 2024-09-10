import axios from "axios";

const FOOTBALL_STANDING_SERVICE_BASE_URL = "http://localhost:8080/api/v1";

class FootballStandingService {

    getCountries() {
        return axios.get(`${FOOTBALL_STANDING_SERVICE_BASE_URL}/countries`)
            .then(response => response.data)
            .catch(error => {
                console.error("Error fetching countries:", error);
                throw error;
            });
        // return new Promise((resolve) => {
        //     console.log("Fetching countries");
        //     // Static data
        //     const data = [
        //         {
        //             "country_id": "44",
        //             "country_name": "England",
        //             "country_logo": "https://apiv3.apifootball.com/badges/logo_country/44_england.png"
        //         },
        //         {
        //             "country_id": "3",
        //             "country_name": "France",
        //             "country_logo": "https://apiv3.apifootball.com/badges/logo_country/3_france.png"
        //         }
        //     ];
        //     // Resolve the promise with the static data
        //     resolve(data);
        // });
    }

    getLeagues(countryId) {
        return axios.get(`${FOOTBALL_STANDING_SERVICE_BASE_URL}/leagues?countryId=${countryId}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error fetching leagues for country ID ${countryId}:`, error);
                throw error;
            });
        // return new Promise((resolve) => {
        //     console.log(`Fetching leagues for country : ${countryId}`);
        //     // Static data
        //     const data = [
        //         {
        //             "country_id": "44",
        //             "country_name": "England",
        //             "league_id": "149",
        //             "league_name": "English League Premier",
        //             "league_season": "2024/2025",
        //             "league_logo": "https://apiv3.apifootball.com/badges/logo_leagues/149_non-league-premier.png",
        //             "country_logo": "https://apiv3.apifootball.com/badges/logo_country/44_england.png"
        //         }];
        //     // Resolve the promise with the static data
        //     resolve(data);
        // });
    }

    getTeams(leagueId) {
        return axios.get(`${FOOTBALL_STANDING_SERVICE_BASE_URL}/teams?leagueId=${leagueId}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error fetching teams for league ID ${leagueId}:`, error);
                throw error;
            });
        // return new Promise((resolve) => {
        //     console.log(`Fetching teams for league : ${leagueId}`);
        //     // Static data
        //     const data = [
        //         {
        //             "team_key": "73",
        //             "team_name": "Manchester United",
        //             "team_country": "England",
        //             "team_founded": "1867",
        //             "team_badge": "https://apiv3.apifootball.com/badges/73_atletico-madrid.jpg"
        //         }];
        //     // Resolve the promise with the static data
        //     resolve(data);
        // });
    }

    getStandings(leagueId) {
        return axios.get(`${FOOTBALL_STANDING_SERVICE_BASE_URL}/standings?leagueId=${leagueId}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error fetching standings for league ID ${leagueId}:`, error);
                throw error;
            });
        // return new Promise((resolve) => {
        //     console.log(`Fetching standing for league : ${leagueId}`);
        //     // Static data
        //     const data = [
        //             {
        //                 "country_name": "England",
        //                 "league_id": "149",
        //                 "league_name": "Premier League",
        //                 "team_id": "72",
        //                 "team_name": "Arsenal",
        //                 "overall_promotion": "Promotion - Champions League (Group Stage: )",
        //                 "overall_league_position": "1",
        //                 "overall_league_payed": "0",
        //                 "overall_league_W": "0",
        //                 "overall_league_D": "0",
        //                 "overall_league_L": "0",
        //                 "overall_league_GF": "0",
        //                 "overall_league_GA": "0",
        //                 "overall_league_PTS": "0",
        //                 "home_league_position": "1",
        //                 "home_promotion": "",
        //                 "home_league_payed": "0",
        //                 "home_league_W": "0",
        //                 "home_league_D": "0",
        //                 "home_league_L": "0",
        //                 "home_league_GF": "0",
        //                 "home_league_GA": "0",
        //                 "home_league_PTS": "0",
        //                 "away_league_position": "1",
        //                 "away_promotion": "",
        //                 "away_league_payed": "0",
        //                 "away_league_W": "0",
        //                 "away_league_D": "0",
        //                 "away_league_L": "0",
        //                 "away_league_GF": "0",
        //                 "away_league_GA": "0",
        //                 "away_league_PTS": "0",
        //                 "league_round": "",
        //                 "team_badge": "https://apiv3.apifootball.com/badges/141_arsenal.jpg",
        //                 "fk_stage_key": "6",
        //                 "stage_name": "Current"
        //             },
        //             {
        //                 "country_name": "England",
        //                 "league_id": "149",
        //                 "league_name": "Premier League",
        //                 "team_id": "73",
        //                 "team_name": "Manchester United",
        //                 "overall_promotion": "Promotion - Champions League (Group Stage: )",
        //                 "overall_league_position": "2",
        //                 "overall_league_payed": "0",
        //                 "overall_league_W": "0",
        //                 "overall_league_D": "0",
        //                 "overall_league_L": "0",
        //                 "overall_league_GF": "0",
        //                 "overall_league_GA": "0",
        //                 "overall_league_PTS": "0",
        //                 "home_league_position": "2",
        //                 "home_promotion": "",
        //                 "home_league_payed": "0",
        //                 "home_league_W": "0",
        //                 "home_league_D": "0",
        //                 "home_league_L": "0",
        //                 "home_league_GF": "0",
        //                 "home_league_GA": "0",
        //                 "home_league_PTS": "0",
        //                 "away_league_position": "2",
        //                 "away_promotion": "",
        //                 "away_league_payed": "0",
        //                 "away_league_W": "0",
        //                 "away_league_D": "0",
        //                 "away_league_L": "0",
        //                 "away_league_GF": "0",
        //                 "away_league_GA": "0",
        //                 "away_league_PTS": "0",
        //                 "league_round": "",
        //                 "team_badge": "https://apiv3.apifootball.com/badges/3088_aston-villa.jpg",
        //                 "fk_stage_key": "6",
        //                 "stage_name": "Current"
        //             }
        //         ];
        //     // Resolve the promise with the static data
        //     resolve(data);
        // });
    }

}

export default new FootballStandingService();