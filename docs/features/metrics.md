---
id: metrics
title: Metrics
---

Mission Control keeps track of some metrics for the current (or previous as it resets on new contract load) mission/contract. You can access the metrics with `MissionControl.Instance.Metrics`.

## Additional Lances

| Propety                          | Details                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------- |
| NumberOfEmployerAdditionalLances | Number of Employer AL lances that dropped                                                 |
| NumberOfTargetAdditionalLances   | Number of Target AL lances that dropped                                                   |
| NumberOfAdditionalLances         | Combined count of `NumberOfEmployerAdditionalLances` and `NumberOfTargetAdditionalLances` |
