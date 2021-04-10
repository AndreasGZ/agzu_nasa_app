export type stringOrUndefined = string | undefined;

export interface ApodType {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface DonkiType {
  messageBody: string;
  messageID: string;
  messageIssueTime: string;
  messageType: string;
  messageURL: string;
}

export interface Techport {
  projects: {
    projects: Project[];
    totalCount: number;
  }
}

export interface Project {
  id: number;
  lastUpdated: string;
}

export type apiTypes = ApodType[] | DonkiType[] | Techport;

export interface Fotos {
  camera: {
    full_name: string;
    id: number;
    name: string;
    rover_id: number;
  };
  earth_date: string;
  id: number;
  img_src: string;
  rover: {
    id: number;
    landing_date: string;
    launch_date: string;
    name: string;
    status: string;
  };
  sol: number;
}

export interface EpicType {
  attitude_quaternions: {
    q0: number;
    q1: number;
    q2: number;
    q3: number;
  };
  caption: string;
  centroid_coordinates: {
    lat: number;
    lon: number;
  };
  coords: {
    attitude_quaternions: {
      q0: number;
      q1: number;
      q2: number;
      q3: number;
    };
    centroid_coordinates: {
      lat: number;
      lon: number;
    };
    dscovr_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    lunar_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    sun_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
  }
  date: string;
  dscovr_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  identifier: string;
  image: string;
  lunar_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  sun_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  version: string;
}

export interface EpicAllType {
  date: string
}
