import React from 'react';
import { useSelector } from 'react-redux';

import AuthRoutes from '~/routes/auth.routes';
import AppRoutes from '~/routes/app.routes';

export default function Routes() {
  const isSigned = useSelector((state) => state.auth.signed);

  return isSigned ? <AppRoutes /> : <AuthRoutes />;
}
