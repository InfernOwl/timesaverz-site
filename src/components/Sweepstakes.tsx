import React from "react";
import '../styles/Sweeps.css';
import { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Form, Input, TreeSelect, Upload, message  } from "antd";
import seriesJSON from '../constants/series.json';


const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


const Sweepstakes = () => {

    const [value, setValue] = useState<string>();    
    var datesSet: boolean = false;
    var startDate: string = "";
    var endDate: string = "";

    const onChange = (newValue: string) => {
        setValue(newValue);
    };

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }

        return e?.fileList;
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
                            console.log(k);
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

        console.log(treeDataArray);
        return treeDataArray;
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
                    labelCol={{offset: 2}}
                    labelAlign="left"
                    layout="horizontal"
                    name="sweepsForm"
                    style={{ margin: "auto", paddingTop: '5%', width: '90%', color: 'white'}}
                    initialValues={{remember: true}}>
                        <Form.Item label="Name">
                            <Input placeholder="Full Name"/>
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input placeholder="Email Address"/>
                        </Form.Item>
                        <Form.Item label="Game">
                            <TreeSelect showSearch 
                              value={value}
                              dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                              placeholder="Please Select Game"
                              onChange={onChange}
                              treeData={seriesGamesSort()} />
                        </Form.Item>
                        <Form.Item label="SteamID">
                            <Input placeholder="Steam Username"/>
                        </Form.Item>

                        <Form.Item label="Speedrun.com Link">
                            <Input placeholder="Link to Speedrun.com Submission"/>
                        </Form.Item>
                        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or Drag Screenshot of Speedrun.com</p>
                            <p className="ant-upload-text">Submission to this Area to Upload</p>
                        </Dragger>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" name="Submit">Submit</Button>
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