//To Provide Test Data & objects / elements related to whole application
import {Page} from '@playwright/test';
export class global {
   constructor(public page:Page) {
     this.page = page;
   }

//#region [Test Data]
public url : string = "https://ctcorphyd.com/SureshIT/login.php";
public username : string = "sureshit";
public password : string = "sureshit";
public empfirstname : string = "Suresh";
public emplastname : string = "ameeret";
//#endregion


//#region [Locators]
public textbox_loginname = "//input[@name='txtUserName']";
public textbox_password  = "//input[@name='txtPassword']";
public button_login      = "//input[@name='Submit']";
public link_logout       = "//a[text()='Logout']";
public frame_empinfo     ="//iframe[@id='rightMenu']";
public button_add        = "//input[@value='Add']";
public textbox_empfirstname = "//input[@name='txtEmpFirstName']";
public textbox_emplastname  = "//input[@name='txtEmpLastName']";
public button_save          = "//input[@value='Save']";
//#endregion
}
