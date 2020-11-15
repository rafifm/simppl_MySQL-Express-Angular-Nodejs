import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

@NgModule({
    exports: [
        MatIconModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        MatDividerModule,
        MatToolbarModule,
        MatTableDataSource,
        MatPaginatorModule,
        NgMaterialMultilevelMenuModule,
    ]

})
export class AngularMaterialModule {}