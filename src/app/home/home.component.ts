import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { programsinterface } from '../models/programs.interface';
import { projectinterface } from '../models/projects.interface';
import { ApiCallsService } from '../services/api-calls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private apiService: ApiCallsService) {}

  programList: programsinterface[] = [];
  projectList: projectinterface[] = [];

  selectedPrograms: string[] = [];



  onSelectionChange(event: MatSelectChange) {
    this.selectedPrograms = event.value;
    console.log(this.selectedPrograms);
  }

  getApis() {
    this.apiService.getPrograms().subscribe((data) => {
      this.programList = data;
      console.log('ProgramList', this.programList);
    });
    this.apiService.getProjects().subscribe((data) => {
      this.projectList = data;
      console.log('ProjectList', this.projectList);
    });
  }
}
