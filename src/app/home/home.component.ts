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

  resultArray: projectinterface[] = [];

  selectAll = [];

  onSelectionChange(event: MatSelectChange) {
    this.selectedPrograms = event.value;
    console.log(this.selectedPrograms);

    if (this.selectedPrograms == this.selectAll) {
      this.selectedPrograms.pop();
      for (let i = 0; i < this.programList.length; i++) {
        this.selectedPrograms.push(this.programList[i].programId);
      }
    } else {
      const filteredArray = this.projectList.filter((project) => {
        return this.selectedPrograms.some(
          (program) => project.programID == program
        );
      });

      const uniqueArray: projectinterface[] = filteredArray.filter(
        (project, projectindex, filteredArray) => {
          return (
            filteredArray.findIndex(
              (i) => i.projectName === project.projectName
            ) === projectindex
          );
        }
      );
      this.resultArray = uniqueArray;
    }
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
