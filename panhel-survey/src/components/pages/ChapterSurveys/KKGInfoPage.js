import React, {useState} from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import Button from '@mui/material/Button';
import axios from 'axios';
import './InfoPage.css';

const chapterInfoSurvey ={
    "title": " KKΓ Chapter Information",
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "rating",
            "name": "How many PNMS",
            "title": "How many PNMs will matched to a bump group? ",
            "isRequired": true,
            "rateCount": 7,
            "rateMax": 7
          },
          {
            "type": "dropdown",
            "name": "How many bump groups?",
            "title": "How many bump groups will you have? ",
            "isRequired": true,
            "choices": [
              "10",
              "11 - 20",
              "21 - 30",
              "31 - 40"
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 1",
            "visibleIf": "((({How many bump groups?} = '10') or ({How many bump groups?} = '11 - 20')) or ({How many bump groups?} = '21 - 30')) or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 1",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 2",
            "visibleIf": "((({How many bump groups?} = '10') or ({How many bump groups?} = '11 - 20')) or ({How many bump groups?} = 'Item 4')) or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 2",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 3",
            "visibleIf": "((({How many bump groups?} = '10') or ({How many bump groups?} = '11 - 20')) or ({How many bump groups?} = 'Item 4')) or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 3",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 4",
            "visibleIf": "((({How many bump groups?} = '10') or ({How many bump groups?} = '11 - 20')) or ({How many bump groups?} = 'Item 4')) or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 4",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 5",
            "visibleIf": "((({How many bump groups?} = '10') or ({How many bump groups?} = '11 - 20')) or ({How many bump groups?} = 'Item 4')) or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 5",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 6",
            "visibleIf": "((({How many bump groups?} = '10') or ({How many bump groups?} = '11 - 20')) or ({How many bump groups?} = 'Item 4')) or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 6",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 7",
            "visibleIf": "((({How many bump groups?} = '10') or ({How many bump groups?} = '11 - 20')) or ({How many bump groups?} = 'Item 4')) or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 7",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 8",
            "visibleIf": "((({How many bump groups?} = '10') or ({How many bump groups?} = '11 - 20')) or ({How many bump groups?} = 'Item 4')) or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 8",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 9",
            "visibleIf": "((({How many bump groups?} = '10') or ({How many bump groups?} = '11 - 20')) or ({How many bump groups?} = 'Item 4')) or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 9",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 10",
            "visibleIf": "((({How many bump groups?} = '10') or ({How many bump groups?} = '11 - 20')) or ({How many bump groups?} = 'Item 4')) or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 10",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 11",
            "visibleIf": "({How many bump groups?} = '11 - 20') or (({How many bump groups?} = '21 - 30') and ({How many bump groups?} = '31 - 40'))",
            "title": "Bump Group 11",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 12",
            "visibleIf": "({How many bump groups?} = '11 - 20') or (({How many bump groups?} = 'Item 4') and ({How many bump groups?} = '31 - 40'))",
            "title": "Bump Group 12",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 13",
            "visibleIf": "({How many bump groups?} = '11 - 20') or (({How many bump groups?} = 'Item 4') and ({How many bump groups?} = '31 - 40'))",
            "title": "Bump Group 13",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 14",
            "visibleIf": "({How many bump groups?} = '11 - 20') or (({How many bump groups?} = 'Item 4') and ({How many bump groups?} = '31 - 40'))",
            "title": "Bump Group 14",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 15",
            "visibleIf": "({How many bump groups?} = '11 - 20') or (({How many bump groups?} = 'Item 4') and ({How many bump groups?} = '31 - 40'))",
            "title": "Bump Group 15",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 16",
            "visibleIf": "({How many bump groups?} = '11 - 20') or (({How many bump groups?} = 'Item 4') and ({How many bump groups?} = '31 - 40'))",
            "title": "Bump Group 16",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 17",
            "visibleIf": "({How many bump groups?} = '11 - 20') or (({How many bump groups?} = 'Item 4') and ({How many bump groups?} = '31 - 40'))",
            "title": "Bump Group 17",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 18",
            "visibleIf": "({How many bump groups?} = '11 - 20') or (({How many bump groups?} = 'Item 4') and ({How many bump groups?} = '31 - 40'))",
            "title": "Bump Group 18",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 19",
            "visibleIf": "({How many bump groups?} = '11 - 20') or (({How many bump groups?} = 'Item 4') and ({How many bump groups?} = '31 - 40'))",
            "title": "Bump Group 19",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 20",
            "visibleIf": "({How many bump groups?} = '11 - 20') or (({How many bump groups?} = 'Item 4') and ({How many bump groups?} = '31 - 40'))",
            "title": "Bump Group 20",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 21",
            "visibleIf": "({How many bump groups?} = '21 - 30') or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 21",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 22",
            "visibleIf": "({How many bump groups?} = '21 - 30') or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 22",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 23",
            "visibleIf": "({How many bump groups?} = '21 - 30') or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 23",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 24",
            "visibleIf": "({How many bump groups?} = 'Item 4') or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 24",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 25",
            "visibleIf": "({How many bump groups?} = 'Item 4') or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 25",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 26",
            "visibleIf": "({How many bump groups?} = 'Item 4') or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 26",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 27",
            "visibleIf": "({How many bump groups?} = 'Item 4') or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 27",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 28",
            "visibleIf": "({How many bump groups?} = 'Item 4') or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 28",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 29",
            "visibleIf": "({How many bump groups?} = 'Item 4') or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 29",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 30",
            "visibleIf": "({How many bump groups?} = 'Item 4') or ({How many bump groups?} = '31 - 40')",
            "title": "Bump Group 30",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 31",
            "visibleIf": "{How many bump groups?} = '31 - 40'",
            "title": "Bump Group 31",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 32",
            "visibleIf": "{How many bump groups?} = '31 - 40'",
            "title": "Bump Group 32",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 33",
            "visibleIf": "{How many bump groups?} = '31 - 40'",
            "title": "Bump Group 33",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 34",
            "visibleIf": "{How many bump groups?} = '31 - 40'",
            "title": "Bump Group 34",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 35",
            "visibleIf": "{How many bump groups?} = '31 - 40'",
            "title": "Bump Group 35",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 36",
            "visibleIf": "{How many bump groups?} = '31 - 40'",
            "title": "Bump Group 36",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 37",
            "visibleIf": "{How many bump groups?} = '31 - 40'",
            "title": "Bump Group 37",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 38",
            "visibleIf": "{How many bump groups?} = '31 - 40'",
            "title": "Bump Group 38",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 39",
            "visibleIf": "{How many bump groups?} = '31 - 40'",
            "title": "Bump Group 39",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          },
          {
            "type": "multipletext",
            "name": "Bump 40",
            "visibleIf": "{How many bump groups?} = '31 - 40'",
            "title": "Bump Group 40",
            "items": [
              {
                "name": "text1",
                "title": "Name 1"
              },
              {
                "name": "text2",
                "title": "Name 2"
              },
              {
                "name": "text3",
                "title": "Name 3"
              },
              {
                "name": "text4",
                "title": "Name 4"
              },
              {
                "name": "text5",
                "title": "Name 5"
              },
              {
                "name": "text6",
                "title": "Name 6"
              },
              {
                "name": "text7",
                "title": "Name 7"
              }
            ]
          }
        ]
      }
    ]
  }  
   
function KKGInfoPage() {
    const chapterInfo= new Model(chapterInfoSurvey);
   // const [surveyResults, setSurveyResults] = useState([]);
   //const [selectedIndex, setSelectedIndex] = useState(null); // State to track selected person

    chapterInfo.applyTheme(
      {
        "themeName": "default",
        "colorPalette": "light",
        "isPanelless": false,
        "backgroundImage": "",
        "backgroundOpacity": 1,
        "backgroundImageAttachment": "scroll",
        "backgroundImageFit": "cover",
        "cssVariables": {
            "--sjs-font-family": "Georgia, serif",
            "--sjs-corner-radius": "4px",
            "--sjs-base-unit": "8px",
            "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
            "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
            "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
            "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
            "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
            "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
            "--sjs-general-backcolor-dim-light": "rgba(249, 249, 249, 1)",
            "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
            "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
            "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
            "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
            "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
            "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
            "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
            "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
            "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
            "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
            "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
            "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
            "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
            "--sjs-shadow-inner-reset": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
            "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
            "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
            "--sjs-special-green": "rgba(25, 179, 148, 1)",
            "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
            "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
            "--sjs-special-blue": "rgba(67, 127, 217, 1)",
            "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
            "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
            "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
            "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
            "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
            "--sjs-article-font-xx-large-textDecoration": "none",
            "--sjs-article-font-xx-large-fontWeight": "700",
            "--sjs-article-font-xx-large-fontStyle": "normal",
            "--sjs-article-font-xx-large-fontStretch": "normal",
            "--sjs-article-font-xx-large-letterSpacing": "0",
            "--sjs-article-font-xx-large-lineHeight": "64px",
            "--sjs-article-font-xx-large-paragraphIndent": "0px",
            "--sjs-article-font-xx-large-textCase": "none",
            "--sjs-article-font-x-large-textDecoration": "none",
            "--sjs-article-font-x-large-fontWeight": "700",
            "--sjs-article-font-x-large-fontStyle": "normal",
            "--sjs-article-font-x-large-fontStretch": "normal",
            "--sjs-article-font-x-large-letterSpacing": "0",
            "--sjs-article-font-x-large-lineHeight": "56px",
            "--sjs-article-font-x-large-paragraphIndent": "0px",
            "--sjs-article-font-x-large-textCase": "none",
            "--sjs-article-font-large-textDecoration": "none",
            "--sjs-article-font-large-fontWeight": "700",
            "--sjs-article-font-large-fontStyle": "normal",
            "--sjs-article-font-large-fontStretch": "normal",
            "--sjs-article-font-large-letterSpacing": "0",
            "--sjs-article-font-large-lineHeight": "40px",
            "--sjs-article-font-large-paragraphIndent": "0px",
            "--sjs-article-font-large-textCase": "none",
            "--sjs-article-font-medium-textDecoration": "none",
            "--sjs-article-font-medium-fontWeight": "700",
            "--sjs-article-font-medium-fontStyle": "normal",
            "--sjs-article-font-medium-fontStretch": "normal",
            "--sjs-article-font-medium-letterSpacing": "0",
            "--sjs-article-font-medium-lineHeight": "32px",
            "--sjs-article-font-medium-paragraphIndent": "0px",
            "--sjs-article-font-medium-textCase": "none",
            "--sjs-article-font-default-textDecoration": "none",
            "--sjs-article-font-default-fontWeight": "400",
            "--sjs-article-font-default-fontStyle": "normal",
            "--sjs-article-font-default-fontStretch": "normal",
            "--sjs-article-font-default-letterSpacing": "0",
            "--sjs-article-font-default-lineHeight": "28px",
            "--sjs-article-font-default-paragraphIndent": "0px",
            "--sjs-article-font-default-textCase": "none",
            "--sjs-general-backcolor-dim": "#FCFBF4",
            "--sjs-primary-backcolor": "#000080",
            "--sjs-primary-backcolor-dark": "rgba(0, 0, 113, 1)",
            "--sjs-primary-backcolor-light": "rgba(0, 0, 128, 0.1)",
            "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
            "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
            "--sjs-special-red": "rgba(229, 10, 62, 1)",
            "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
            "--sjs-font-surveytitle-family": "Georgia, serif",
            "--sjs-font-surveytitle-weight": "600",
            "--sjs-font-surveytitle-size": "37px",
            "--sjs-font-headertitle-family": "Georgia, serif",
            "--sjs-font-headertitle-weight": "400",
            "--sjs-font-headertitle-color": "rgba(0, 0, 128, 1)",
            "--sjs-header-backcolor": "transparent"
        },
        "header": {
            "height": 100,
            "titlePositionX": "center",
            "titlePositionY": "middle"
        },
        "headerView": "advanced"
    }
    );

    // Function to handle survey completion
  
    chapterInfo.onComplete.add(function (sender) {
      // 'sender.data' contains the survey data
      axios.post('http://localhost:5000/api/survey-results', {
          surveyType: 'KKG Bump Survey',  // Unique identifier for DG Survey
          surveyData: sender.data
      })
      .then(response => {
          console.log('KKG Info result saved:', response.data);
      })
      .catch(error => {
          console.error('Error saving KKG Info result:', error);
      });
    });


    return (
        <div>
            <Survey model={chapterInfo} />
        </div>
    );
}



export default KKGInfoPage;