import React from "react";
import { Image, Form, Input, Button } from "antd";
import '../styles/Home.css';
import aboutJSON from '../constants/about.json';
import { useState } from "react";

import { generateClient } from "aws-amplify/api";
import { createSuggestions } from "../graphql/mutations";
import { Amplify } from 'aws-amplify';
import config from "../amplifyconfiguration.json";

Amplify.configure(config);


const { TextArea } = Input;
const client = generateClient();

type FieldType = {
    suggestion?: string;
}


const Main = () => {
    
    const [form] = Form.useForm();
    const [state, setState] = useState({
        suggestion: "",
    })

    const changeState = (e:any) => {
        const {value} = e.target;
        console.log(value);
        setState({
            suggestion: value
        })
    }

    const onSubmit = async (suggest: string) => {       
        
        form.validateFields().then(async () => {
            // Create the sweepstakes entry for the graphql database
            if (state.suggestion !== "") {
                const newSuggestions = await client.graphql({
                    query: createSuggestions,
                    variables: {
                        input: {
                            "suggestion": suggest
                        }
                    }
                });

                console.log('Post saved successfully!', newSuggestions);
                alert("Thank you for your Suggestion!")

                // Reset form fields on successful submission
                form.resetFields();
            }
        }).catch((errors:any) => {
            console.log('Error saving post', errors);
        })
    }

    const onFinish = () => {
        setState({
            suggestion: ""
        })
        
    }

    return (
        <>
            <div className="homeSynopsis">
                <p>The Timesaverz present...</p>
                <h1>RACE NIGHT!</h1>

                <p>Welcome to <strong>"Race Nights"</strong> a seasonal speedrun format where our three streamers (<a href="https://www.twitch.tv/hoagiepops" rel="noreferrer" target="_blank">Hoagiepops</a>, <a href="https://www.twitch.tv/infernowl" rel="noreferrer" target="_blank">InfernOwl</a>, and <a href="https://www.twitch.tv/lsjay" rel="noreferrer" target="_blank">LSJay</a>) learn, run, and RACE some amazing games over the course of 3 months doing their best to beat times, earn points, and gain bragging rights!</p>
                <p>Each season our runners have 3 attempts0 to best their fellow racers as well as their own times and earn points for the leaderboard. Races happen on the last Thursday of each month but practice happens for the entire 3 month period, so our runners are constantly improving and making the competition as close as possible.</p>
                <p>At the end of the season, the runner with the fastest time on the leaderboard gets bonus points, and the runner with the most points is declared the winner! The runner with the lowest total points is, of course, the loser and has to do a punishment run.</p>
                <p>The goal of The Timesaverz is to have fun speedrunning, showcase fun speedgames that might not get as much love and activity as they deserve, and work to grow the community of speedrunning overall!</p>
                <p>So whether you're just watching the <a href="/races">Races</a>, or want to run alongside us in our <a href="/sweepstakes">Sweepstakes</a> we hope that you enjoy the runs!</p>
            </div>
            <div className="hor_spacer mainPage">
                <div className="gameSubForm">
                    <h2>Suggestion Box!</h2>
                    <p>Have a game suggestion for Race Nights? Maybe a game you'd like us to run, schedule suggestions, visual thoughts?<br />
                        Submit them below and it'll send them straight to us!<br />
                        We appreciate any and all suggestions!</p>
                    <Form
                      form={form}
                      labelCol={{offset: 2}}
                      labelAlign="left"
                      layout="horizontal"
                      name="sweepsForm"
                      style={{ margin: "auto", paddingTop: '5%', width: '90%', color: 'white'}}
                      initialValues={{remember: true}}
                      onFinish={onFinish}>
                        <Form.Item<FieldType>
                          label="Suggestion"
                          name="suggestion"
                          className="formLabel"
                          rules={[{ required: true, type: 'string', message : "Unfortunately we can't take a blank suggestion."}]}>
                            <TextArea rows={4} name="suggestionBox" value={state.suggestion} onChange={changeState} allowClear/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" name="submit" onClick={() => onSubmit(state.suggestion)} htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>

                </div>
                <div className="currentGame">
                    <div className="currentGameText">
                        <h2>Check out what we're currently running!</h2>
                        <p>{aboutJSON.game.name}</p>
                        <p>{aboutJSON.game.category}</p>
                    </div>
                    <div className="currentGameImage">
                        <Image src={aboutJSON.game.image} preview={false} width={"100%"}></Image>
                    </div>
                </div>
            </div>
            <div className="points">
                <h3>Race Nights Points Breakdown</h3>
                <p>At the end of each month's race the placements will receive points as follows:</p>
                <ul>
                    <li>First Place - 3 pts</li>
                    <li>Second Place - 2 pts</li>
                    <li>Third Place - 1 pts</li>
                </ul>
                <p>At the end of the season, the runner with the fastest time on the Speedrun.com leaderboard for the game will receive an additional 2 points.</p>
            </div>
        </>
    )
}

export default Main;