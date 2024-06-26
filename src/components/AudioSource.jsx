import heater1 from "../assets/sounds/Heater-1.mp3";
import heater2 from "../assets/sounds/Heater-2.mp3";
import heater3 from "../assets/sounds/Heater-3.mp3";
import heater4 from "../assets/sounds/Heater-4_1.mp3";
import clap from "../assets/sounds/Heater-6.mp3";
import openhh from "../assets/sounds/Dsc_Oh.mp3";
import closedhh from "../assets/sounds/Cev_H2.mp3";
import kicknhat from "../assets/sounds/Kick_n_Hat.mp3";
import kick from "../assets/sounds/RP4_KICK_1.mp3";

const AudioSource = [
    {
        id: "heater1",
        name: 'Heater1',
        audio: heater1,
        key: 'Q',
        keyCode: 81
    },
    {
        id: "heater2",
        name: 'Heater2',
        audio: heater2,
        key: 'W',
        keyCode: 87
    },
    {
        id: "heater3",
        name: 'Heater3',
        audio: heater3,
        key: 'E',
        keyCode: 69
    },
    {
        id: "heater4",
        name: 'Heater4',
        audio: heater4,
        key: 'A',
        keyCode: 65
    },
    {
        id: "clap",
        name: 'Clap',
        audio: clap,
        key: 'S',
        keyCode: 83
    },
    {
        id: "openhh",
        name: 'OpenHH',
        audio: openhh,
        key: 'D',
        keyCode: 68
    },
    {
        id: "closedhh",
        name: 'ClosedHH',
        audio: closedhh,
        key: 'Z',
        keyCode: 90
    },
    {
        id: "kicknhat",
        name: 'KickNHat',
        audio: kicknhat,
        key: 'X',
        keyCode: 88
    },
    {
        id: "kick",
        name: 'Kick',
        audio: kick,
        key: 'C',
        keyCode: 67
    }
];

export default AudioSource;