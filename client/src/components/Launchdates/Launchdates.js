import React, { Component } from 'react';
import "./Launchdates.css"
import API from "./../../utils/API"

class Launchdates extends Component {

    componentDidMount() {
        API.getSpacexAll().then(res => {
            console.log(res.data);
            

        });
    }

    state = {
        columns: ["flight number", "rocket ID", "mission name", "launch site", "launch date", "success"],
        rows: [{
            "flight number": "1",
            "rocket ID": "falcon1",
            "mission name": "FalconSat",
            "launch site": "Kwajalein Atoll Omelek Island",
            "launch date": "3/25/2006",
            "success": "False, loss of vehicle"
        },

        {
            "flight number": "2",
            "rocket ID": "falcon1",
            "mission name": "DemoSat",
            "launch site": "Kwajalein Atoll Omelek Island",
            "launch date": "3/21/2007",
            "success": "False, failed to make orbit"
        },
        {
            "flight number": "3",
            "rocket ID": "falcon1",
            "mission name": "Trailblazer",
            "launch site": "Kwajalein Atoll Omelek Island",
            "launch date": "8/2/2008",
            "success": "False, explosion between stages 1 and 2"
        },
        {
            "flight number": "4",
            "rocket ID": "falcon1",
            "mission name": "RatSat",
            "launch site": "Kwajalein Atoll Omelek Island",
            "launch date": "9/28/2008",
            "success": "True, first privatly funded and developed rocket to make orbit "
        },
        {
            "flight number": "5",
            "rocket ID": "falcon1",
            "mission name": "RazaSat",
            "launch site": "Kwajalein Atoll Omelek Island",
            "launch date": "7/13/2009",
            "success": "True, no details"
        },
        {
            "flight number": "6",
            "rocket ID": "falcon9",
            "mission name": "Falcon 9 test flight",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "6/4/2010",
            "success": "True, no details"
        },
        {
            "flight number": "7",
            "rocket ID": "falcon9",
            "mission name": "COTS 1",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "12/8/2010",
            "success": "True, no details"
        },
        {
            "flight number": "8",
            "rocket ID": "falcon9",
            "mission name": "COTS 2",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "5/2/2010",
            "success": "True, 2nd attempt at lunh was success"
        },
        {
            "flight number": "9",
            "rocket ID": "falcon9",
            "mission name": "CRS-1",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "10/8/2010",
            "success": "True, lost secondary payload due to low orbit"
        },
        {
            "flight number": "10",
            "rocket ID": "falcon9",
            "mission name": "CRS-2",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "3/1/2013",
            "success": "True, last successful launch of Falcon 9 V1.0"
        },
        {
            "flight number": "11",
            "rocket ID": "falcon9",
            "mission name": "CASSIOPE",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "9/29/2013",
            "success": "True, first Falcon9 v1.1"
        },
        {
            "flight number": "12",
            "rocket ID": "falcon9",
            "mission name": "SES-8",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "12/3/2013",
            "success": "True, first GTO launch for Falcon 9 v1.1"
        },
        {
            "flight number": "13",
            "rocket ID": "falcon9",
            "mission name": "Thaicom 6",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "1/6/2014",
            "success": "True, second GTO launch for Falcon 9 v1.1"
        },
        {
            "flight number": "14",
            "rocket ID": "falcon9",
            "mission name": "CRS-3",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "4/18/2-14",
            "success": "True, destroyed upon ocean touchdown "        },
        {
            "flight number": "15",
            "rocket ID": "falcon9",
            "mission name": "OG-2 Mission 1",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "7/14/2014",
            "success": "True, was not recoverd from ocean landing"
        },
        {
            "flight number": "16",
            "rocket ID": "falcon9",
            "mission name": "AsiaSat",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "8/5/2014",
            "success": "True, no details "
        },
        {
            "flight number": "17",
            "rocket ID": "falcon9",
            "mission name": "AsiaSat 6",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "True, no details",
            "success": "True, no details"
        },
        {
            "flight number": "18",
            "rocket ID": "falcon9",
            "mission name": "CRS-4",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "9/21-2014",
            "success": "true, no details"
        },
        {
            "flight number": "19",
            "rocket ID": "falcon9",
            "mission name": "CRS-5",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "1-10-2015",
            "success": "True, unable to land on floating platform resaulting in crash "
        },
        {
            "flight number": "20",
            "rocket ID": "falcon9",
            "mission name": "DSCOVR",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "2/11/2015",
            "success": "True,first launch under USAF contract, landing within 33ft of target "
        },
        {
            "flight number": "21",
            "rocket ID": "falcon9",
            "mission name": "ABS_#A/Eutelsat 115W B",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "3/2/2015",
            "success": "True, first conjoined launch with Boing to launch dual-commsat"
        },
        {
            "flight number": "22",
            "rocket ID": "falcon9",
            "mission name": "CRS-6",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "4/14/2015",
            "success": "True, but tipped off landing ship resulatin in loss of vehicle"
        },
        {
            "flight number": "23",
            "rocket ID": "falcon9",
            "mission name": "TurkmenAlem 52E/ MonacoSAT",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "4/27/2015",
            "success": "True, no details"
        },
        {
            "flight number": "24",
            "rocket ID": "falcon9",
            "mission name": "CRS-7",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "6/28/2015",
            "success": "True, crash during landing, parachutte not programmed for deployment during vehicle failure"
        },
        {
            "flight number": "25",
            "rocket ID": "falcon9",
            "mission name": "OG-2 Misson 2",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "12/22/2015",
            "success": "True, launched 11 satellites and successfuly landed the booster at CCAFSSLC"
        }, 
        {
            "flight number": "26",
            "rocket ID": "falcon9",
            "mission name": "Jason 3",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "1/17/2016",
            "success": "True, first launch of NASA and NOAA joint mission. booster failed to latch upon landig causing tip over and explosion"
        },
        {
            "flight number": "27",
            "rocket ID": "falcon9",
            "mission name": "SES-9",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "3/4/2016",
            "success": "True, second launch of Falcon9 v1.2, successful landing"
        },
        {
            "flight number": "28",
            "rocket ID": "falcon9",
            "mission name": "CRS-8",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "4/8/2016",
            "success": "True, successful landing on a floating landingpad"
        },
        {
            "flight number": "29",
            "rocket ID": "falcon9",
            "mission name": "JCSAT-2B",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "5/6/2016",
            "success": "True, launched JCSAT 14 communications satellite"
        },
        {
            "flight number": "30",
            "rocket ID": "falcon9",
            "mission name": "Thaicom 8",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "5/27/2016",
            "success": "True, launched thaicom sat to serve Thailand, India and Africa"
        },
        {
            "flight number": "31",
            "rocket ID": "falcon9",
            "mission name": "ABS-2A",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "5/15/2016",
            "success": "True, launced 2 boing 702SP gridded ion thurster satellites"
        },
        {
            "flight number": "32",
            "rocket ID": "falcon9",
            "mission name": "CRS9",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "7/18/2016",
            "success": "True, IDA-2 docking adapter was carried o ISS"
        },
        {
            "flight number": "33",
            "rocket ID": "falcon9",
            "mission name": "JCSAT-16",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "8/14/2016",
            "success": "True, first attempt to touch dowm form a ballistic trajectory"
        },
        {
            "flight number": "34",
            "rocket ID": "falcon9",
            "mission name": "Amos-6",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "9/1/2016",
            "success": "False, lost in launchpad explosion during propellant fill, pad was clear of personnel there were no injuries "
        },
        {
            "flight number": "35",
            "rocket ID": "falcon9",
            "mission name": "Iridium NEXT Mission 1",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "1/14/2017",
            "success": "True, replace constellation"
        },
        {
            "flight number": "36",
            "rocket ID": "falcon9",
            "mission name": "CRS-10",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "2/19/2017",
            "success": "True, carrying suppplies to support research at ISS"
        },
        {
            "flight number": "37",
            "rocket ID": "falcon9",
            "mission name": "EchoStar 23",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "3/16/2017",
            "success": "True, launched communications satellite for EchoStar Corp."
        },
        {
            "flight number": "38",
            "rocket ID": "falcon9",
            "mission name": "SES-10",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "3/30/2017",
            "success": "True, First payload to fly on a reused first stage"
        },
        {
            "flight number": "39",
            "rocket ID": "falcon9",
            "mission name": "NROL-76",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "5/1/2017",
            "success": "True, first launch under certification for NSSM"
        },
        {
            "flight number": "40",
            "rocket ID": "falcon9",
            "mission name": "Inmarsat-5 F4",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "5/15/2017",
            "success": "True, at 6070 kg, heavest payload  GTO for a Falcon 9"
        },
        {
            "flight number": "41",
            "rocket ID": "falcon9",
            "mission name": "CRS-11",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "6/3/2017",
            "success": "True, deliverd Neutron Star Interior Composition Exploer to ISS "
        },
        {
            "flight number": "42",
            "rocket ID": "falcon9",
            "mission name": "BulgariaSat-1",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "6/23/2017",
            "success": "True, second time a booster was reused"
        },
        {
            "flight number": "43",
            "rocket ID": "falcon9",
            "mission name": "Iridium NEXT Mission 2",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "6/25/2017",
            "success": "True, first flight with titanum grid fins to help with re-entry and landing"
        },
        {
            "flight number": "44",
            "rocket ID": "falcon9",
            "mission name": "Intelsat 35e",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "7/5/2017",
            "success": "True,  due to heave weight, booster will not be reusable"
        },
        {
            "flight number": "45",
            "rocket ID": "falcon9",
            "mission name": "CRS-12",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "8/14/2017",
            "success": "True, first flight of falcon 9 block 4 upgrade"
        },
        {
            "flight number": "46",
            "rocket ID": "falcon9",
            "mission name": "FormoSat-5",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "8/24/2017",
            "success": "True, launch EARTH observation satellite for Twainese space agency"
        },
        {
            "flight number": "47",
            "rocket ID": "falcon9",
            "mission name": "Boeing X-37B OTV-5",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "9/7/2017",
            "success": "True, Boing is primary contractor of the X-37B"
        },
        {
            "flight number": "48",
            "rocket ID": "falcon9",
            "mission name": "Iridium NEXT Mission 3",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "10/9/2017",
            "success": "True, third of eight missions to launch second gen constellation from VAFB"
        },
        {
            "flight number": "49",
            "rocket ID": "falcon9",
            "mission name": "SES-11",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "10/11/2017",
            "success": "True, nineteenth comsat to GTO"
        },
        {
            "flight number": "50",
            "rocket ID": "falcon9",
            "mission name": "KoreaSat 5A",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "10/30/2017",
            "success": "True, comsat capable of providing communtcations in Asia"
        },
        {
            "flight number": "51",
            "rocket ID": "falcon9",
            "mission name": "CRS-13",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "12/15/2017",
            "success": "True, reuse of Dragon capsule"
        },
        {
            "flight number": "**52**",
            "rocket ID": "falcon9",
            "mission name": "Iridium NEXT Mission 4",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "12/22/2017",
            "success": "True, reusing booster from Iridium-2 "
        },
        {
            "flight number": "53",
            "rocket ID": "falcon9",
            "mission name": "ZUMA",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "1/7/2018",
            "success": " True, delayed due to test results"
        },
        {
            "flight number": "54",
            "rocket ID": "falcon9",
            "mission name": "SES-16",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "1/31/2018",
            "success": "True, reused booster stayed intact upon landing"
        },
        {
            "flight number": "55",
            "rocket ID": "falcon9",
            "mission name": "Falcon Heavy Test Flight",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "2/6/2018",
            "success": "True, launch and landing were both succesful"
        },
        {
            "flight number": "56",
            "rocket ID": "falcon9",
            "mission name": "Paz/Starlink Demo",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "2/22/2018",
            "success": "True, first flight with flairing 2.0, will also carry 2 spaceX test satellites"
        },
        {
            "flight number": "57",
            "rocket ID": "falcon9",
            "mission name": "Hispasat 30W-6",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "3/6/2018",
            "success": "True, launched with landing legs titanium grid fins, did not attemp landing due to unfavorable weather conditions "
        },
        {
            "flight number": "58",
            "rocket ID": "falcon9",
            "mission name": "Iridium NEXT Mission 5",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "3/30/2018",
            "success": "True, fifth NEXT mission with reused booster"
        },
        {
            "flight number": "59",
            "rocket ID": "falcon9",
            "mission name": "CRS-14",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "4/2/2018",
            "success": "True, launch used refurbished booster"
        },
        {
            "flight number": "60",
            "rocket ID": "falcon9",
            "mission name": "TESS",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "4/18/2018",
            "success": "True, part of Explorers program"
        },
        {
            "flight number": "61",
            "rocket ID": "falcon9",
            "mission name": "Bangabandhu-1",
            "launch site": "Kennedy Space Center Historic Launch Complex 39A",
            "launch date": "5/11/20",
            "success": "True, first launch of Block V first stage"
        },
        {
            "flight number": "62",
            "rocket ID": "falcon9",
            "mission name": "Iridium NEXT Mission 6",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "5/22/2018",
            "success": "True, GFZ arranged a rideshare of GRACE-F0 on a Falcon 9"
        },
        {
            "flight number": "63",
            "rocket ID": "falcon9",
            "mission name": "SES-12",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "5/31/2018",
            "success": "True, no details"
        },
        {
            "flight number": "64",
            "rocket ID": "falcon9",
            "mission name": "Telstar 19V",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "6/172018",
            "success": "TBD"
        },
        {
            "flight number": "65",
            "rocket ID": "falcon9",
            "mission name": "CRS-15",
            "launch site": "Cape Canaveral Air Force Station Space Launch Complex 40",
            "launch date": "6/28/2018",
            "success": "TBD"
        },
        {
            "flight number": "66",
            "rocket ID": "falcon9",
            "mission name": "Iridium NEXT Misson 7",
            "launch site": "Vandenberg Air Force Base Space Launch Complex 4E",
            "launch date": "7/9/2018",
            "success": "TBD"
        },
    ]

    }
    render() {

        var dataColumns = this.state.columns;
        var dataRows = this.state.rows;

        var tableHeaders = (<thead>
            <tr>
                {dataColumns.map(function (column) {
                    return <th>{column}</th>;
                })}
            </tr>
        </thead>);

        var tableBody = dataRows.map(function (row) {
            return (
                <tr>
                    {dataColumns.map(function (column) {
                        return <td>{row[column]}</td>;
                    })}
                </tr>);
        });

        return (<table className="table table-bordered table-hover" width="100%">
            {tableHeaders}
            {tableBody}
        </table>)
    }
}



export default Launchdates;



