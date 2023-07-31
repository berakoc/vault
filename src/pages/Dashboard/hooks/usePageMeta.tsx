import { useMount } from 'react-use';
import { useTranslation } from 'react-i18next';
import useStore from '../../../store';
import { setPageMetaSelector } from '../../../store/selectors/layout';

export function usePageMeta() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'dashboard.pageMeta',
  });
  const setPageMeta = useStore(setPageMetaSelector);

  useMount(() => {
    setPageMeta({
      title: t('title'),
      description: t('description'),
    });
  });
}
