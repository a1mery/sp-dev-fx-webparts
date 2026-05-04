import * as React from 'react';
import { IActivity, ICompletion } from '../models/IWellbeingModels';
import styles from './WellbeingTracker.module.scss';

export interface ITrackerGridProps {
  activities: IActivity[];
  completions: ICompletion[];
  dates: Date[];
  today: Date;
  isWeekView: boolean;
  onToggle: (activityId: number, date: Date, existingCompletionId: number | undefined) => void;
}

const DAY_ABBREVS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const CATEGORY_COLORS: Record<string, string> = {
  Health: '#22c55e',
  Mindfulness: '#a855f7',
  Social: '#3b82f6',
};

function toDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getProgressColor(pct: number): string {
  if (pct >= 70) return 'linear-gradient(90deg, #22c55e, #16a34a)';
  if (pct >= 40) return 'linear-gradient(90deg, #3b82f6, #06b6d4)';
  return 'linear-gradient(90deg, #f59e0b, #f97316)';
}

const CheckIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CalendarIcon: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const TrackerGrid: React.FC<ITrackerGridProps> = ({ activities, completions, dates, today, isWeekView, onToggle }) => {
  const todayKey = toDateKey(today);
  const numDays = dates.length;

  // Build a lookup map: activityId → dateKey → completionId
  const completionMap = React.useMemo(() => {
    const map: Record<number, Record<string, number>> = {};
    completions.forEach(c => {
      if (!map[c.activityId]) map[c.activityId] = {};
      map[c.activityId][c.completionDate] = c.id;
    });
    return map;
  }, [completions]);

  const actColWidth = isWeekView ? 200 : 160;
  const cellWidth = isWeekView ? 44 : 28;
  const cellSize = isWeekView ? 36 : 22;
  const checkSize = isWeekView ? 16 : 11;

  const gridTemplateColumns = `${actColWidth}px repeat(${numDays}, ${cellWidth}px) 185px`;

  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridWrapper} style={{ gridTemplateColumns }}>

        {/* ── Column headers ── */}
        <div className={styles.colHeaderActivity}>Activity</div>

        {dates.map((d, i) => {
          const key = toDateKey(d);
          const isToday = key === todayKey;
          return (
            <div
              key={key}
              className={`${styles.colHeaderDay}${isToday ? ` ${styles.today}` : ''}`}
              title={d.toDateString()}
            >
              {isWeekView ? DAY_ABBREVS[i] : d.getDate()}
            </div>
          );
        })}

        <div className={styles.colHeaderProgress}>Progress</div>

        {/* ── Top separator ── */}
        <div className={styles.rowSeparator} />

        {/* ── Empty state ── */}
        {activities.length === 0 && (
          <div className={styles.emptyState}>
            <CalendarIcon />
            <p>No activities yet — add one below to get started.</p>
          </div>
        )}

        {/* ── Activity rows ── */}
        {activities.map((activity, rowIdx) => {
          const actCompletions = completionMap[activity.id] || {};
          const completedDays = dates.filter(d => actCompletions[toDateKey(d)]).length;
          const consistency = Math.round((completedDays / numDays) * 100);
          const dotColor = CATEGORY_COLORS[activity.category] || '#6b7280';

          return (
            <React.Fragment key={activity.id}>
              {/* Activity name */}
              <div className={styles.activityName} title={activity.title}>
                <span className={styles.categoryDot} style={{ background: dotColor }} />
                {activity.title}
              </div>

              {/* Day cells */}
              {dates.map(date => {
                const key = toDateKey(date);
                const isFuture = date > today;
                const completionId = actCompletions[key];
                const isCompleted = completionId !== undefined;

                const cellStateClass = isFuture
                  ? styles.cellFuture
                  : isCompleted
                    ? styles.cellCompleted
                    : styles.cellEmpty;

                return (
                  <div key={key} className={styles.cellWrap}>
                    <button
                      className={`${styles.cell} ${cellStateClass}`}
                      style={{ width: cellSize, height: cellSize }}
                      onClick={() => !isFuture && onToggle(activity.id, date, completionId)}
                      disabled={isFuture}
                      title={`${date.toDateString()}${isCompleted ? ' — Completed' : ''}`}
                      aria-label={`${activity.title} on ${date.toDateString()}${isCompleted ? ', completed' : ', not completed'}`}
                      aria-pressed={isCompleted}
                    >
                      {isCompleted && <CheckIcon size={checkSize} />}
                    </button>
                  </div>
                );
              })}

              {/* Progress */}
              <div className={styles.progressCell}>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${consistency}%`, background: getProgressColor(consistency) }}
                    role="progressbar"
                    aria-valuenow={consistency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <span className={styles.progressText}>{consistency}% consistency</span>
              </div>

              {/* Row separator (except after last) */}
              {rowIdx < activities.length - 1 && <div className={styles.rowSeparator} />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
