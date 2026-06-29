export const TIMELINE_SECTIONS = [
  {
    key: "education",
    heading: "Education",
    sortBy: "dateStart",
    sortDirection: "desc",
  },
  {
    key: "professional",
    heading: "Work & Internships",
    sortBy: "dateStart",
    sortDirection: "desc",
  },
];

export const STATUS_CONFIG = {
  current: { label: "Current", className: "timeline-status-current" },
  incoming: { label: "Incoming", className: "timeline-status-incoming" },
  past: { label: null, className: null },
};

function compareValues(a, b, direction) {
  if (a === b) return 0;
  if (direction === "desc") return a > b ? -1 : 1;
  return a > b ? 1 : -1;
}

export function sortEntries(entries, sortBy, sortDirection = "desc") {
  return [...entries].sort((a, b) => {
    const primary = compareValues(a[sortBy] ?? "", b[sortBy] ?? "", sortDirection);
    if (primary !== 0) return primary;
    return compareValues(a.sortOrder ?? 0, b.sortOrder ?? 0, sortDirection);
  });
}

export function getTimelineSections(
  entries,
  config = TIMELINE_SECTIONS
) {
  return config
    .map(({ key, heading, sortBy, sortDirection }) => ({
      key,
      heading,
      entries: sortEntries(
        entries.filter((entry) => entry.section === key),
        sortBy,
        sortDirection
      ),
    }))
    .filter((section) => section.entries.length > 0);
}

export function getRowPreviewTags(entry, max = 3) {
  if (entry.preview?.tags?.length) {
    return entry.preview.tags.slice(0, max);
  }
  if (entry.skills?.length) {
    return entry.skills.slice(0, max);
  }
  return [];
}
