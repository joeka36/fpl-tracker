export class Player {
  name: string;
  squad_number: number;
  cost: number;
  selected_by_percent: number;
  form: number;
  transfer_out_event: number;
  transfer_in_event: number;
  total_points: number;
  event_points: number;
  ppg: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  ep_this: number;
  ep_next: number;
  influence: number;
  creativity: number;
  threat: number;
  ict_index: number;
  season_points: number[];
  season_name: string[];
  past_fixtures_points: number[];
  fixtures: string[];

  constructor(name:string, num:number, cost:number, select: number,
              form:number, out_transfer:number, in_transfer:number,
              total:number, event:number, ppg:number, goal:number,
              assists:number, clean:number, conceded:number, ep_this:number,
              ep_next:number, influence:number, creativity:number,
              threat:number, ict:number, points:number[], names:string[],
              past:number[], fixtures:string[]) {

    this.name = name;
    this.squad_number = num;
    this.cost = cost;
    this.selected_by_percent = select;
    this.form = form;
    this.transfer_out_event = out_transfer;
    this.transfer_in_event = in_transfer;
    this.total_points = total;
    this.event_points = event;
    this.ppg = ppg;
    this.goals_scored = goal;
    this.assists = assists;
    this.clean_sheets = clean;
    this.goals_conceded = conceded;
    this.ep_this = ep_this;
    this.ep_next = ep_next;
    this.influence = influence;
    this.creativity = creativity;
    this.threat = threat;
    this.ict_index = ict;
    this.season_points = points;
    this.season_name = names;
    this.past_fixtures_points = past;
    this.fixtures = fixtures;
  }  
}