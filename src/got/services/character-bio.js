import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CharacterBioService {
  constructor (http: Http)  {
    this.http = http;
  }

  whenGetCharacterBio (characterName) {
    return this.whenGetAllCharacterBios().then(characters => characters[characterName]);
  }

  whenGetAllCharacterBios () {
    if (this.characters) {
      return Promise.resolve(this.characters);
    }

    return this.http.get("got/data/bios.json")
      .toPromise()
      .then(response => {
        const data = response.json();

        // Massage data
        this.characters = data.reduce((result, character) => {
          result[character.name] = character;
          return result;
        }, {});

        return this.characters;
      });
  }
}