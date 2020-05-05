import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents:Array<any> = [

]

@NgModule({
  declarations: [],
  imports: [ 
    MaterialComponents,
    MatButtonModule,
   ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
