export const hobbiesSections = [
  { id: "lifting", title: "Weightlifting" },
  { id: "chess", title: "Chess" },
  { id: "basketball", title: "Basketball" },
  { id: "outdoors", title: "Outdoors" },
  { id: "music", title: "Classical music" },
];

export const hobbiesGallery = [
  {
    src: "/wahclella.png",
    alt: "Wahclella Falls in the Columbia River Gorge",
    caption: "Wahclella Falls along the Columbia River Gorge.",
    layout: "tall",
  },
  {
    src: "/chess-ratings.png",
    alt: "Chess.com achievements",
    caption: "Puzzles, bullet, and blitz achievements on Chess.com.",
    layout: "compact",
    cluster: "chess",
  },
  {
    src: "/rapid-progression.png",
    alt: "Chess.com rapid rating progression chart",
    caption: "Rapid rating progression over time.",
    layout: "compact",
    cluster: "chess",
  },
  {
    src: "/white-shirt-self.png",
    alt: "Connor smiling for a badge photo",
    caption: "Smiling for a badge photo!",
    layout: "default",
  },
  {
    src: "/blazers-suns-2025.png",
    alt: "Portland Trail Blazers game at Moda Center",
    caption: "Blazers vs. Suns at the Moda Center, 2025.",
    layout: "wide",
  },
  {
    src: "/cascade-head-summit.png",
    alt: "Cascade Head summit on the Oregon coast",
    caption: "Cascade Head summit, Oregon coast.",
    layout: "default",
  },
  {
    src: "/seattle-portrait.png",
    alt: "View of downtown Seattle from a pier",
    caption: "View of downtown Seattle from a pier.",
    layout: "tall",
  },
  {
    src: "/uw-football.png",
    alt: "Connor and Giles Jackson at UW Husky Stadium",
    caption: "Myself and Giles Jackson at UW Husky Stadium after a win.",
    layout: "wide",
  },
  {
    src: "/sarah-conno.png",
    alt: "Connor and Sarah at Volunteer Park in Seattle",
    caption: "My girlfriend Sarah and I at Volunteer Park in Seattle.",
    layout: "default",
  },
];

export function groupGalleryPhotos(photos) {
  const groups = [];

  for (let index = 0; index < photos.length; index += 1) {
    const photo = photos[index];

    if (photo.cluster) {
      const clusterPhotos = [photo];
      while (
        index + 1 < photos.length &&
        photos[index + 1].cluster === photo.cluster
      ) {
        index += 1;
        clusterPhotos.push(photos[index]);
      }
      groups.push({ type: "cluster", id: photo.cluster, photos: clusterPhotos });
    } else {
      groups.push({ type: "photo", photo });
    }
  }

  return groups;
}
