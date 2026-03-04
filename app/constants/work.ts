import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2022',
    title: 'S.K. School',
    subtitle: 'High School',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-3, -2, -3),
    year: '2023',
    title: 'Freelance',
    subtitle: 'Content & UI Designer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -7),
    year: '2024',
    title: 'GNIOT',
    subtitle: 'B.Tech CSE',
    position: 'right',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  },
]