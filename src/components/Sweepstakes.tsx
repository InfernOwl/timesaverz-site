import React from "react";
import '../styles/Sweeps.css';
import { useState } from "react";
import { Button, Form, Input, TreeSelect  } from "antd";
import seriesJSON from '../constants/series.json';

import { generateClient } from "aws-amplify/api";
import { createSweepstakesEntry} from "../graphql/mutations";

type FieldType = {
    name?: string;
    email?: string;
    game?: string;
    steamID?: string;
    speedrunLink?: string;
}

const client = generateClient();

const Sweepstakes = () => {

    const [form] = Form.useForm();
    const [stateName, setStateName] = useState<string>("");    
    const [stateEmail, setStateEmail] = useState<string>("");    
    const [stateGame, setStateGame] = useState<string>("");    
    const [stateSteam, setStateSteam] = useState<string>("");    
    const [stateSpeedrunLink, setStateSpeedrunLink] = useState<string>("");

    var datesSet: boolean = false;
    var startDate: string = "";
    var endDate: string = "";

    const onChangeName = (e: any) => {
        
        setStateName(e.target.value);
    };

    const onChangeEmail = (e: any) => {
        setStateEmail(e.target.value);
    };

    const onChangeGame = (e: any) => {
        console.log(e);
        setStateGame(e);
    };
    
    const onChangeSteam = (e: any) => {
        setStateSteam(e.target.value);
    };

    const onChangeSpeedrunLink = (e: any) => {
        setStateSpeedrunLink(e.target.value);
    };

    const seriesGamesSort = () => {

        var treeDataArray:any = [];

        seriesJSON.series.map((key: any, val: any) => {
            let currentSeries:any = [];
            let seriesChildren : any = [];

            

            key.races.map((k:any, v:any) => {

                if (k.standings.started) {
                    if (!k.standings.finished) {

                        if (!datesSet) {
                            startDate = k.sweeps_start;
                            endDate = k.sweeps_end;
                            datesSet = true;
                        }

                        seriesChildren.push(
                            {
                                "value": k.game_title, 
                                "title":<p style={{ color: 'green'}}>{k.game_title}</p>,
                            }
                        )
                    } else {
                        seriesChildren.push(
                            {
                                "title":<p style={{ color: 'red', pointerEvents: "none"}}>{k.game_title}</p>,
                                "selectable": false
                            }
                        )
                    }
                }
            })

            
            currentSeries.push({"title": `Series ${key.series_id}`,
                                "value": `Series ${key.series_id}`,
                                "selectable": false,
                                "children": seriesChildren});
            treeDataArray.push(currentSeries[0]);
        })

        return treeDataArray;
    }

    

    const onSubmit = async () => {    

        const sweepsEntryDetails = {
            "name": stateName,
            "email": stateEmail,
            "game": stateGame,
            "steam_id": stateSteam,
            "speedrun_link": stateSpeedrunLink
        }
        
        form.validateFields().then(async () => {
        // Create the sweepstakes entry for the graphql database
            if (sweepsEntryDetails.name !== "" && sweepsEntryDetails.email !== "" && sweepsEntryDetails.game !== "" && sweepsEntryDetails.steam_id !== "" && sweepsEntryDetails.speedrun_link !== "") {
                const newSweepsEntry = await client.graphql({
                    query: createSweepstakesEntry,
                    variables: {input: sweepsEntryDetails}
                });

                console.log('Post saved successfully!', newSweepsEntry);
                alert("Thank you for your entry into the Sweepstakes!\nGood Luck!")

                // Reset form fields on successful submission
                form.resetFields();
            }
        }).catch((errors) => {
            console.log('Error saving post', errors);
        })
    }

    return (
        <>
            <div className="hor_spacer sweeps">
                <div className="sweepsSynopsis">
                    <h1>Race Night Sweepstakes</h1>
                    <p>Wanna be more involved in race nights?<br/>
                       Enjoy the game we've chosen enough to learn it?<br/>
                       ... Want a $20 steam gift card???</p>
                    <h2>Join the Race Night Sweepstakes!</h2>
                    <p>Enter for the chance to win $20 in steam credit by running the game alongside us and submitting a time to the current game's speedrun.com leaderboard. One week after the final race, a winner will be randomly chosen from all eligible entries!</p>
                </div>
            </div>
            <div className="hor_spacer sweeps">
                <div className="sweepsRules">
                <h2>How to Enter!</h2>
                <ul>
                    <li><strong>Perform, record, and submit</strong> a valid run of the sweepstakes game to the relevant Speedrun.com leaderboard</li>
                    <li>Take a screenshot of the pending submission page to submit in the form to the right.</li>
                    <li>Fill out the form with your legal name, valid email address, the game you're submitting for, your Steam ID, a link to your pending Speedrun.com run, and the uploaded screenshot of your Speedrun.com submission.</li>
                </ul>
                <h4>Good Luck and Thanks for Participating!</h4>
                </div>
                <div className="sweepsForm">
                    <Form
                    form={form}
                    labelCol={{offset: 2}}
                    labelAlign="left"
                    layout="horizontal"
                    name="sweepsForm"
                    style={{ margin: "auto", paddingTop: '5%', width: '90%', color: 'white'}}
                    initialValues={{remember: true}}>
                        <Form.Item<FieldType>
                          label="Name"
                          name="name"
                          rules={[{ required: true, type: 'string', message : "Please add a name to the form."}]}>
                            <Input placeholder="Full Name" value={stateName} onChange={onChangeName}/>
                        </Form.Item>
                        <Form.Item<FieldType>
                          label="Email"
                          name="email"
                          rules={[{ required: true, type: 'email', message : "Please add a valid email address to the form."}]}>
                          <Input placeholder="Email Address" value={stateEmail} onChange={onChangeEmail}/>
                        </Form.Item>
                        <Form.Item<FieldType>
                          label="Game"
                          name="game"
                          rules={[{ required: true, type: 'string', message : "Please select the correct game."}]}>
                            <TreeSelect showSearch 
                              dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                              placeholder="Please Select Game"
                              onChange={onChangeGame}
                              treeData={seriesGamesSort()} />
                        </Form.Item>
                        <Form.Item<FieldType>
                          label="Steam ID"
                          name="steamID"
                          rules={[{ required: true, type: 'string', message : "Please add your Steam Tag."}]}>
                            <Input placeholder="Steam Username" value={stateSteam} onChange={onChangeSteam}/>
                        </Form.Item>

                        <Form.Item<FieldType>
                          label="Speedrun.com Link"
                          name="speedrunLink"
                          rules={[{ required: true, type: 'url', message : "Please add the submission link to the form."}]}>
                            <Input placeholder="Link to Speedrun.com Submission" value={stateSpeedrunLink} onChange={onChangeSpeedrunLink}/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" name="Submit" htmlType="submit"  onClick={onSubmit}>Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
                
            </div>
            <div className="sweepsFinePrint">
                - No purchase necessary.
                - Sweepstakes begins on {startDate} and submissions close on {endDate}.
                - Must be 15 years or older to enter.
                - Entries limited to 1 per valid run.
                - Prize awarded: Two(2) $10 USD Digital Steam gift cards awarded from the steam account of Twitch.tv/InfernOwl
                - Winner will be selected and contacted through Steam the Thursday following deadline for submissions, and awarded as soon as possible following confirmation of contact.
                - If contact cannot be made within 48 hours of outreach a new winner will be selected from the remaining valid entrants.
            </div>
        </>
    )
}

export default Sweepstakes;

/* Dragger Form Functionality
    <Dragger {...props}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or Drag Screenshot of Speedrun.com</p>
        <p className="ant-upload-text">Submission to this Area to Upload</p>
    </Dragger>
*/