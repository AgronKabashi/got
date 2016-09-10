import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class EpisodeService {
  constructor (http: Http)  {
    this.http = http;
  }

  whenGetEpisode(season, episode) {
    return this.http.get(`got/data/season${season}_${episode}.json`)
      .toPromise()
      .then(response => response.json());
  }
}