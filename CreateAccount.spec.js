const { POMManager } = require('./Pages/POMManager.js');//../Pages/LogInPage.js
import { test, expect } from '@playwright/test';
import Data from "../Utils/LogInCredentials.json";//../Utils/LogInCredentials.json

test('test', async ({ page }) => {
    const pom = new POMManager(page);
    const LogIn = await pom.getLogInPage();
    await LogIn.openBrowser(Data.URL);
    await LogIn.login(Data.LogInCredentials.email, Data.LogInCredentials.password);

    const profile = await pom.getProfilePage();
    await profile.basicTab(Data.BasicInfo.userFirstName, Data.BasicInfo.userSecondName);
    await profile.setExperiance(Data.BasicInfo.experiance);
    await profile.setRole(Data.BasicInfo.role);
    await profile.tabOnNext();

    for (let key in Data.SummaryPoint) {
    await profile.setSummaryDetails(Data.SummaryPoint[key]);
    }
    await profile.tabOnNext();
    
    await profile.setEducation(Data.EducationData.Degree, Data.EducationData.FieldOfStudy, Data.EducationData.Year);
    await profile.tabOnNext();
    for (let key in Data.TechSkills.techName) {
    await profile.addTechSkills(Data.TechSkills.techName[key]);
    }
    for (let key in Data.TechSkills.dataBaseName) {
        await profile.addDataBase(Data.TechSkills.dataBaseName[key]);
    }
    for (let key in Data.TechSkills.AWSName) {
        await profile.addAWS(Data.TechSkills.AWSName[key]);
    }
    for (let key in Data.TechSkills.ProjectManagementToolName) {
        await profile.addProjectManagementList(Data.TechSkills.ProjectManagementToolName[key]);
    }
    for (let key in Data.TechSkills.sourceControllName) {
        await profile.addSourceControll(Data.TechSkills.sourceControllName[key]);
    }
    await profile.tabOnNext();
    // First Project
    await profile.addProjectName(Data.ProjectName.projectName);
    await profile.addTechnologies(Data.ProjectName.technologyName);
    await profile.projectDuration(Data.Duration.months);
    for (let key in Data.Descriptions) {
        await profile.addDescription(Data.Descriptions[key]);
    }
    for (let key in Data.Responsibilities) {
        await profile.addResponsibilities(Data.Responsibilities[key]);
    }
    await profile.addProject();
    await page.pause();

    
});



 // Second Project
//  await profile.tabOnAddPlusButton();
//  await profile.addProjectName(Data.ProjectName1.projectName);
//  await profile.addTechnologies(Data.ProjectName1.technologyName);
//  await profile.projectDuration(Data.Duration1.months);
//  for (let key in Data.Descriptions1) {
//      await profile.addDescription(Data.Descriptions1[key]);
//  }
//  for (let key in Data.Responsibilities1) {
//      await profile.addResponsibilities(Data.Responsibilities1[key]);
//  }
//  await profile.addProject();   
// await page.pause();
// await profile.saveProject();