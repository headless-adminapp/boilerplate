import {
  Body1,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  tokens,
} from '@fluentui/react-components';
import { Event, eventSchema } from '@/app/config/schema/event';
import { FC } from 'react';
import { bundleLazyIcon } from '@headless-adminapp/icons-fluent/lazyIcon';
import { Data } from '@headless-adminapp/core/transport';
import dayjs from 'dayjs';
import { useOpenForm } from '@headless-adminapp/app/navigation/hooks';

const CalenderIcon = bundleLazyIcon('Calendar24Regular', 'Calendar24Filled');

const MoreMenuIcon = bundleLazyIcon(
  'MoreVertical24Regular',
  'MoreVertical24Filled'
);
const OpenIcon = bundleLazyIcon('Open24Regular', 'Open24Filled');

const useStyles = makeStyles({
  root: {
    padding: tokens.spacingHorizontalM,
    gap: tokens.spacingHorizontalS,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  menuButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
  },
  title: {
    fontWeight: tokens.fontWeightMedium,
  },
  dateTag: {
    display: 'flex',
    gap: tokens.spacingHorizontalXXS,
    alignItems: 'center',
    color: tokens.colorNeutralForeground4,
    fontSize: tokens.fontSizeBase200,
  },
});

interface RecordItemProps {
  record: Data<Event>;
}

export const RecordItem: FC<RecordItemProps> = ({ record }) => {
  const openForm = useOpenForm();
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Menu positioning="below-end">
        <MenuTrigger>
          <Button
            icon={<MoreMenuIcon size={16} />}
            size="small"
            appearance="subtle"
            className={styles.menuButton}
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem
              icon={<OpenIcon size={20} />}
              onClick={() => {
                openForm({
                  logicalName: eventSchema.logicalName,
                  id: record._id,
                });
              }}
            >
              Open record
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
      <Body1 className={styles.title}>{record.title}</Body1>
      <div className={styles.dateTag}>
        <CalenderIcon size={16} filled opacity={0.5} />
        <span>{dayjs(record.createdAt).format('MMM DD')}</span>
      </div>
    </div>
  );
};
