
import React from 'react';
import './profileStyle.js';
import "./profilestyle.css"

import { ProfileSkills, Profile,ProfileList,ProfileItem,Span,SpanWeb, Skills, SkillsDesc, SkillsBar, BarTitle, BarPerc,Parent,ParentSpan} from './profileStyle'


const ProfileA = () => {
    return (
        <ProfileSkills>
            <div className="container">
                <Profile>
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Mariam Madbouli
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            23/3/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Egypt,Cairo
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            mariam@mariam.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </Profile>

                <Skills>
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <SkillsBar>
                        <BarTitle >Bootstrap</BarTitle>
                        <BarPerc >100%</BarPerc>
                        <Parent>
                            <ParentSpan className="sp1"></ParentSpan>
                        </Parent>
                    </SkillsBar>

                    <SkillsBar>
                        <BarTitle>CSS3</BarTitle>
                        <BarPerc >90%</BarPerc>
                        <Parent>
                            <ParentSpan className="sp2" ></ParentSpan>
                        </Parent>
                    </SkillsBar>

                    <SkillsBar>
                        <BarTitle>Photoshop</BarTitle>
                        <BarPerc >80%</BarPerc>
                        <Parent>
                            <ParentSpan className="sp3"></ParentSpan>
                        </Parent>
                    </SkillsBar>
                </Skills>

            </div>
        </ProfileSkills>
    )
}

export default ProfileA;