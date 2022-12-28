function tvShow (InputName, InputDirector, InputYear, InputEpisodes){
    this.name = InputName;
    this.director = InputDirector;
    this.year = InputYear;
    this.episodes = InputEpisodes;
    this.getInfo = function(){
        return `${this.name} - ${this.director} - ${this.year} - ${this.episodes}`;
    };
}

const breakingBad = new tvShow("Breaking Bad", "Vince Gilligan", "2008", "62");
console.log(breakingBad.getInfo());


