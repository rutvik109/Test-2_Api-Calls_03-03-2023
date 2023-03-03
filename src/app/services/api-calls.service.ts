import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { programsinterface } from '../models/programs.interface';
import { projectinterface } from '../models/projects.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  constructor(private http: HttpClient) {}

  programs_url: string =
    'http://cmi-ofm.azurewebsites.net/api/Program/GetAllActiveVirtualPrograms';

  projects_url: string =
    'http://cmi-ofm.azurewebsites.net/api/Program/GetVirtualProjects';

  getPrograms() {
    return this.http
      .get<{ virtualProgramList: programsinterface[] }>(this.programs_url)
      .pipe(
        map((res) => {
          return res.virtualProgramList;
        })
      );
  }

  getProjects() {
    return this.http
      .get<{ virtualProgramDetails: projectinterface[] }>(this.projects_url)
      .pipe(
        map((res) => {
          return res.virtualProgramDetails;
        })
      );
  }
}
