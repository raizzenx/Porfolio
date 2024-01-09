import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as spanish } from '../shared/i18n/es';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"ASP, .NET, C#",percent:90,remark:'excellent'}, {name:"PHP",percent:70,remark:'good'},{name:"HTML5, CSS3",percent:90,remark:'excellent'},{name:"JavaScript, JQuery, Ajax",percent:80,remark:'very-good'}, {name:"BootStrap, Angular", percent:80,remark:'very-good'}],
    tools:[{name:"Git, Bitbucket",percent:80,remark:'very-good'},{name:"Office",percent:90,remark:'excellent'},{name:"Linux, Windows, MAC",percent:80,remark:'very-good'},{name:"MySql, SQL Server",percent:90,remark:'excellent'}],
    methodologies:[{name:"Scrum",percent:70,remark:'good'},{name:"Uml",percent:90,remark:'excellent'},{name:"Disign Thinking",percent:70,remark:'good'},{name:"TDD",percent:80,remark:'very-good'},{name:"DevOps",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, spanish);
  }

  ngOnInit(): void {
  }

}

    
    
  
