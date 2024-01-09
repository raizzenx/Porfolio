import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as spanish } from '../shared/i18n/es';
import { referencesEn} from '../api/referencesEn';
import { referencesEs} from '../api/referencesEs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  references:any=referencesEn;
  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, spanish);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.references=referencesEn;
      }
      else{
        this.references=referencesEs;
      }
    });
  }

  ngOnInit(): void {
  }

}
